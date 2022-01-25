/**
 * @file Home component
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Question from './Question'

class Home extends Component {
  render() {
    const { answeredIds, unansweredIds } = this.props

    return (
      <div className='container w-[500px] mx-auto'>
        <Tabs>
          <TabList>
            <Tab>Unanswered Questions</Tab>
            <Tab>Answered Questions</Tab>
          </TabList>
          <TabPanel>
            {unansweredIds.map((id) => (
              <Question id={id} key={id} />
            ))}
          </TabPanel>
          <TabPanel>
            {answeredIds.map((id) => (
              <Question id={id} key={id} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

/**
 * @param {object} state - Redux state
 * @param {string} state.authedUser - authenticated user id
 * @param {object} state.questions - question objects
 * @param {object} state.users - user objects
 */
function mapStateToProps({ authedUser, questions, users }) {
  return {

    // grab all answered questions ids
    answeredIds: Object.keys(users[authedUser].answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    // grab all unanswered question ids and sort by newest first
    unansweredIds: Object.keys(questions)
      .filter(id => !Object.keys(users[authedUser].answers).includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

/**
 * @see {@link https://react-redux.js.org/api/connect}
 */
export default connect(mapStateToProps)(Home)
