import React from 'react'
import Rental from './Rental'

const RentalList = (props) => {

  const eachRental = () => {
    return props.listings.map((rental) => <Rental rentalObj={rental} key={rental.id} clickedRental={props.clickedRental}/>)
  }

  return (
    <div className="container">
      <div className="row">{eachRental()}</div>
    </div>
  );
  
}

export default RentalList
