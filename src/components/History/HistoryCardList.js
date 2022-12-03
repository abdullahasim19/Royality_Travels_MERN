import React from 'react'
import HistoryCard from './HistoryCard';
import './HistoryCard.css';
const HistoryCardList = (props) => {
  return (
    <div className='hist-container'>
      {props.list.map(m=>{
        return <HistoryCard name={m.name} seats={m.seats} startDate={m.startDate} id={m.id} 
        key={m.id}
        endDate={m.endDate}/>
      })}
    </div>
  )
}

export default HistoryCardList
