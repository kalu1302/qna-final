import React from 'react';
import TakePollContainer from '../take_poll/take_poll_container';

class TakePollIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllGroups();
  }

  render() {
    const allGroups = this.props.groups;

    debugger

    let renderPolls = (
      allGroups.map( item => (
        <li className="poll-index-item-container"
          key={item.id}
          >
          <TakePollContainer
            groupId={item.id}
            groupName={item.name}
            groupSubject={item.subject}/>
        </li>)
      )
    );

    return (
      <div>
        <ul className="poll-index-container">
          {renderPolls}
        </ul>
      </div>
    );
  }
}

export default TakePollIndex;
