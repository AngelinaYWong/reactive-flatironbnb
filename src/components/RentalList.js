import React from 'react'
import Rental from './Rental'
import $ from "jquery"

class RentalList extends React.Component {

  componentDidMount(){
    $(".App").fadeIn(2000);
  }

  eachRental = () => {
    return this.props.listings.map((rental) => <Rental rentalObj={rental} key={rental.id} clickedRental={this.props.clickedRental}/>)
  }

  render(){
  return (
    <div className="container">
      <div className="row">{this.eachRental()}</div>
    </div>
  );
 }
}

export default RentalList
