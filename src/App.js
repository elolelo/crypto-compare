import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
const NumberFormat = require('react-number-format');

class  App extends Component {
  constructor(props){
    super(props);
    this.state = {cryptos: []};

  }

  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR&extraParams=your_app_name')
      .then(res => {
        const cryptos =res.data;
        console.log(cryptos);
        this.setState({crptos : cryptos})
      })
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
       <h4>Cryptocompare 2019</h4>

       <div className="App">
      {Object.keys(this.state.cryptos).map((key) => 
          <div id="#crypto-holder">
              <span className="left">{key}</span>
              <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} displayPrecision={2} /></span>
          </div>
        )}
    </div> 
    </div>
 
  );
  }
}

export default App;
