import React from 'react';
import {Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import axios from 'axios';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
    };
  }

  fetchRatesData(type) {
    axios.get(`http://localhost:3000/api/v1/rates?type=${type}`)
      .then((response) => {
        let data = response.data.data;
        data.datasets.map(function(dSet) {
          dSet.borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
          return dSet;
        });
        this.setState({chartData: data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchRatesData(this.props.type);
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <Line
          data = {this.state.chartData}
          width={1000}
          height={500}
        />
      </div>
    )
  }
}

Chart.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
};

export default Chart;
