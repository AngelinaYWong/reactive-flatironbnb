import React from 'react'

class Rental extends React.Component {

  clickHandler = (e) => {
    this.props.clickedRental(this.props.rentalObj)
  }

  render() {
    return (<div className="col-sm-4" onClick={this.clickHandler}><h5>{this.props.rentalObj.name}</h5>
      <img src={this.props.rentalObj.imageUrl}  className="listingImage img-thumbnail"/>
      </div>)
  }
}

export default Rental
