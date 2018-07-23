import React from 'react'

class RentalDisplay extends React.Component {

  render() {
    console.log(this.props.currentRental)
    return (<div onClick={this.props.resetCurrentListing}>
      <h1>{this.props.currentRental.name}</h1>
      <img src={this.props.currentRental.imageUrl} alt={this.props.currentRental.name} className='listingImageDisplay'/><br/>
      {this.props.currentRental.price} {this.props.currentRental.priceCurrency}<br/>
      </div>)
  }
}

export default RentalDisplay
