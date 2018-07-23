import React from 'react'

const RentalDisplay = (props) => {

    return (<div onClick={props.resetCurrentListing}>
      <h1>{props.currentRental.name}</h1>
      <img src={props.currentRental.imageUrl} alt={props.currentRental.name} className='listingImageDisplay'/><br/>
      {props.currentRental.price} {props.currentRental.priceCurrency}<br/>
      </div>)
}

export default RentalDisplay
