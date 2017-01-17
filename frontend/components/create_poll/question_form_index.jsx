import React from 'react';


class QuestionFormIndex extends React.Component {

  render() {
    const questionOrder = this.props.pollForm.question_order;
    const questions = this.props.pollForm.questions;
    const mapQuestionForms = questionOrder.map(id =>
      (<QuestionForm
        key={id}
        OneQuestionInfo={questions.id}
        handleStateChange={this.props.handleStateChange.bind(null, id)}
      />));

    return (
      {mapQuestionForms}
    );
  }
}

export default QuestionFormIndex;
