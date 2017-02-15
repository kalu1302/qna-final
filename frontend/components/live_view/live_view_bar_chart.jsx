import React from 'react';
import { values } from 'lodash';

class LiveViewBarChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillReceiveProps() {
    this.parseDataAndSave();
  }

  componentWillMount() {
    this.parseDataAndSave();
  }

  componentDidMount() {
      this.parseDataAndSave();
  }

  parseDataAndSave() {
    let title = Object.keys(this.props.data)[0];
    let tallies = this.props.data[title];

    tallies.map(
      (item) => {
        let text = item.text;
        let value = item.value;
        this.setState({[text]: value});
      }
    );
  }

  render () {

    //THIS IS A horizontal barchart
    let data = this.state;
    let title = Object.keys(this.props.data);


    const max_w = Math.floor(window.innerWidth * 0.95);
    const max_h = 200;

    const width_pad_factor = 1.25;
    const max_w_data_units = Math.max(...values(data)) * width_pad_factor;

    const width_unit = max_w / max_w_data_units;

    const max_h_data_units = Object.keys(data).length;
    const height = max_h / max_h_data_units;

    const px = (number) => ((number + "px"));


    const renderDivs = Object.keys(data).map(
      (text, idx) => {
        let value = data[text];
        let width = value * width_unit;
        if (isNaN(width)) {
          width = 5;
        }
        if (width > (0.5 * max_w)) {
          return (
          <div
            key={text +idx}>
          <div
            style={{width: px(width), height: px(height)}}
            className="bar-chart-div"
            width={px(width)}
            height={px(height)}
            >{text}: {value}</div>
        </div>
      )} else {
        return (
          <div
            key={text + idx}>
          <div
            style={{width: px(width), height: px(height)}}
            className="bar-chart-div"
            width={px(width)}
            height={px(height)}
            ></div>
          <div className="bar-chart-text">
            {text}: {value}
          </div>
        </div>
        )
      };

      });

    return (
      <div
        className="shadow-card">
        <h3>{title}</h3>
        {renderDivs}
      </div>
    );
  }


}

export default LiveViewBarChart;
