import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { nullLiteral } from '@babel/types';

class AverageRate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      averageRate: {
        buy: 0,
        sell: 0,
      },
    };
  }

  fetchRatesData(from, to) {
    axios.get(`http://localhost:3000/api/v1/average_rate?from=${from}&to=${to}`)
      .then((response) => {
        const data = response.data.data;
        const averageRate = {
          buy: data.average_buy,
          sell: data.average_sell,
        }
        this.setState({averageRate: averageRate})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchRatesData(this.props.currencyFrom, this.props.currencyTo);
  }

  render() {
    let buyString = `BUY ${this.props.currencyFrom} -> ${this.props.currencyTo} : ${this.state.averageRate.buy}`;
    let sellString = `SELL ${this.props.currencyFrom} -> ${this.props.currencyTo} : ${this.state.averageRate.sell}`;
    return (
      <div>
        <p>{buyString}</p>
        <p>{sellString}</p>
      </div>
    )
  }
}

AverageRate.propTypes = {
  currencyFrom: PropTypes.string,
  currencyTo: PropTypes.string,
};

export default AverageRate;
