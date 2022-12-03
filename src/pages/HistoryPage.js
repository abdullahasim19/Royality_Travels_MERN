import React, { useEffect,useState } from 'react'
import { useHttpClient } from '../hooks/http-hook'
import LoadingSpinner from '../components/UIElements/LoadingSpinner'
import { useSelector } from 'react-redux'
import HistoryCardList from '../components/History/HistoryCardList'

const HistoryPage = () => {
    const userData = useSelector((state => state))
    const { isloading, error, sendRequest } = useHttpClient();
    const [historyLoaded,setHistoryLoaded]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/users/${userData.userid}/history`)
                setHistoryLoaded(responseData.userHist)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[sendRequest,userData.userid])
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
                <div className='text-center'>
                <LoadingSpinner />
                </div>
                )
            }
            {
                historyLoaded&&(
                    <HistoryCardList list={historyLoaded} />
                )
            }
            
        </div>

    )
}

export default HistoryPage
