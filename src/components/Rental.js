import React from 'react'

  const Rental = (props) => {
    return (<div className="col-sm-4" onClick={() => props.clickedRental(props.rentalObj)}><h5>{props.rentalObj.name}</h5>
      <img src={props.rentalObj.imageUrl}  className="listingImage img-thumbnail"/>
      </div>)
  }

export default Rental
