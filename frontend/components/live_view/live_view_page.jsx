import React from 'react';
import TakePollContainer from "../take_poll/take_poll_container";
import LiveViewBarChart from "./live_view_bar_chart";
// import BarChart from 'react-bar-chart';

import RaisedButton from 'material-ui/RaisedButton';

class LiveViewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentQuestionIndex: 0};

    this.invalidQuestionShift = this.invalidQuestionShift.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
  }

  invalidQuestionShift(shift) {
    if (typeof this.props.results === 'undefined') {
      return true;
    } else {

    let questions = this.props.results;
    let currentIndex = this.state.currentQuestionIndex;


    return (typeof questions[ currentIndex + shift ] === 'undefined');}
  }


  handleNextQuestion(e) {
    e.preventDefault;
    let currentQuestionIndex = this.state.currentQuestionIndex + 1;
    this.setState({currentQuestionIndex});
  }

  handlePrevQuestion(e) {
    e.preventDefault;
    let currentQuestionIndex = this.state.currentQuestionIndex - 1;
    this.setState({currentQuestionIndex});
  }

  componentWillMount() {
    let url = location.hash.substring(7);
    this.props.fetchPollInfo(url);
  }

  componentDidMount() {
    let url = location.hash.substring(7);
    this.props.fetchPollInfo(url);
  }

  render () {

    const groupId = this.props.groupId;
    const authorId = this.props.authorId;

    //TEMP DATA cannot find bug somewhere in container reducer
    //api call from window works, store dispatch action  works
    const data = this.props.results;
    const currentQuestion = data[this.state.currentQuestionIndex];
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    // const data = this.props.results;
    let liveViewBarChartLoad = "";

    const buttons = (
      <div>
        <RaisedButton
          ref="prev"
          label="Prev Question"
          onClick={this.handlePrevQuestion}
          disabled={this.invalidQuestionShift(-1)}/>
        <RaisedButton
          ref="next"
          label="Next Question"
          onClick={this.handleNextQuestion}
          disabled={this.invalidQuestionShift(1)}/>
      </div>
    );

    const mapLiveViews = data.map(
      (item, index) => (
          <LiveViewBarChart key={index} data={item}/>
      )
    );

    if (data.length > 0 && typeof currentQuestion === 'object') {
      liveViewBarChartLoad = (
        <div>
          {mapLiveViews}
        </div>
      );
    }

    let takePollLoad = "";

    if ( this.props.name.length > 0 ) {
      takePollLoad = (

        <TakePollContainer float={true} groupId={groupId}/>);
    }


    return (
      <div>
        <br/>
        {liveViewBarChartLoad}
        <br/>
        {takePollLoad}
        <br/>

      </div>
    );
  }
}

export default LiveViewPage;
