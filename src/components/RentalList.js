import React from 'react'
import Rental from './Rental'

class RentalList extends React.Component {

  eachRental = () => {
    return this.props.listings.map((rental) => <Rental rentalObj={rental} key={rental.id} clickedRental={this.props.clickedRental}/>)
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.eachRental()}</div>
      </div>
    )
  }
}

export default RentalList
