import React, { useState, useEffect } from 'react'
import { useHttpClient } from '../hooks/http-hook'
import LoadingSpinner from '../components/UIElements/LoadingSpinner'
import ReviewsList from '../components/TopRated/ReviewsList'

const TopRated = () => {
    const [allReviews, setReviews] = useState([]);
    const { isloading, error, sendRequest } = useHttpClient();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/trips/reviews');
                setReviews(responseData.ratings)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [sendRequest])
    // const DUMMY = [
    //     {
    //         name: 'ABD',
    //         rating: 5,
    //         review: "Very"
    //     },
    //     {
    //         name: 'ABD',
    //         rating: 5,
    //         review: "Very"
    //     }
    // ]
    return (
        <div>
            {
                error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {error}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }
            {
                isloading && (
                    <div className='center'>
                        <LoadingSpinner />
                    </div>
                )
            }
            {
                allReviews.length > 0 ? <ReviewsList reviewlist={allReviews} />
                    : (
                        <div className='text-center text-danger'>
                            <h1>No Reviews yet!</h1>
                        </div>
                    )
            }
        </div>
    )
}

export default TopRated
