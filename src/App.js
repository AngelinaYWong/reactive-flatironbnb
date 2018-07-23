import React, { Component } from 'react';
import RentalList from './components/RentalList'
import RentalDisplay from './components/RentalDisplay'
import Rental from './components/Rental'
import logo from './logo.svg';
import './App.css';

// Title
// Address - Country
// Price
// Rating
// Image URL

class App extends Component {
  state = {
    listings: [],
    currentRental: null
  }

  getClickedRental = (clickedRental) => {
    this.setState((previousState) => {
      return {currentRental: clickedRental}
    })
  }

  resetCurrentListing = () => {
    this.setState((previousState) => {
      return {currentRental: null}
    })
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/jathmel/Ruby/master/listings.json')
    .then(response => response.json())
    .then(data => {
      this.setState({listings: data})
    })
  }

  render() {
    return (
      <div className="App">
        <div id="title">Flatiron BnB</div>
        { this.state.currentRental ? <RentalDisplay currentRental={this.state.currentRental} resetCurrentListing={this.resetCurrentListing}/> :  <RentalList listings={this.state.listings} clickedRental={this.getClickedRental}/>}
      </div>
    );
  }
}

export default App;
