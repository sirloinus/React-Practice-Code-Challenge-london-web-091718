import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    page: 0,
    balance: 100,
    plates: []
  }

  fetchData = async url => {
    const response = await fetch(url)
    // console.log(response.json())
    return response.json()
  }

  async componentDidMount() {
    const data = await this.fetchData(API)
    data.map(sush => sush.clicked = false)
    this.setState({ sushi: [...data] })
  }

  nextFourSushi = () => {
    this.setState({ page: this.state.page + 1})
  }

  buySushiHandler = selectedSushi => {
    const newBalance = this.state.balance - selectedSushi.price
    if (newBalance >= 0) {
      const sushi = [...this.state.sushi]
      const clickedSushi = sushi.find(sush => sush.id === selectedSushi.id)
      clickedSushi.clicked = true

      const boughtSushi = [...this.state.plates]
      boughtSushi.push(selectedSushi)

      this.setState({
        sushi,
        balance: newBalance,
        plates: boughtSushi
      })    
    }
  }

  render() {
    const { sushi, page, balance, plates } = this.state
    const fourSushi = sushi.slice(page, page + 4)
    const { nextFourSushi, buySushiHandler } = this
    return (
      <div className="app">
        <SushiContainer  
          sushi={fourSushi} 
          nextFourSushi={nextFourSushi}
          buySushiHandler={buySushiHandler}
        />
        <Table balance={balance} plates={plates}/>
      </div>
    );
  }
}

export default App;