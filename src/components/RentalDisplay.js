import React from 'react'
import $ from 'jquery';

class RentalDisplay extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count: 30
      }
    }

    componentDidMount(){
      $(".App").fadeIn(2000, function(){
        console.log("OI");
        this.interval = setInterval(function(){
          this.setState({
            count: --this.state.count
          }, function(){
            if (this.state.count <= 10) {
              $("#timerWarning").addClass("shake")
            }
            if(this.state.count === 0){
              clearInterval(this.interval);
              this.props.resetCurrentListing();
            }
          }.bind(this));
        }.bind(this), 1000);
      }.bind(this));
    }

    render(){
      return (<div onClick={this.props.resetCurrentListing}>
        <h1>{this.props.currentRental.name}</h1>
        <img src={this.props.currentRental.imageUrl} alt={this.props.currentRental.name} className='listingImageDisplay'/><br/>
        <p id="price">{this.props.currentRental.price} {this.props.currentRental.priceCurrency}</p>
        <p id="timerWarning">You have {this.state.count} seconds left before this amazing offer expires!</p>
        </div>)
    }
}

export default RentalDisplay
