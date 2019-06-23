import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
const NumberFormat = require('react-number-format');

class  App extends Component {
  constructor(props){
    super(props);
    this.state = {cryptos: []};

  }

  componentDidMount() {
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=')
        .then(res => {
            const cryptos = res.data;
            console.log(cryptos);
            this.setState({cryptos: cryptos});
        });
  }
  render(){
  return (
    <div className="container">
       <h4> Daily Cryptocompare in USD</h4>

       <div className="App">
      {Object.keys(this.state.cryptos).map((key) => 
          <div id="#crypto-holder">
              <span className="left">{key}</span>
              <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displaytype={'text'} displayprecision={2} thousandSeparator={true} prefix={'$'}/></span>
          </div>
        )}
    </div> 
    </div>
 
  );
  }
}

export default App;
