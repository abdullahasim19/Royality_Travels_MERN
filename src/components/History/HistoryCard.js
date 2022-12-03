import React from 'react'
import Button from '../FormElements/Button';
import './HistoryCard.css';
const HistoryCard = (props) => {
    return (
        <div className="hist-card">
            <div className="box">
                <div className="content">
                    <h3>{props.name}</h3>
                    <h4 className='text-light'>Start Date: {props.startDate} </h4>
                    <h4 className='text-light'>End Date: {props.endDate}</h4>
                    <p>Seats Booked: {props.seats}</p>
                    <Button>Rate trip</Button>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard
