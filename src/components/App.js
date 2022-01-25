/**
 * @file App component
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import NewQuestion from './NewQuestion'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Poll from './Poll'
import NotFound from './NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <>
        <LoadingBar />
        <Header />
        <div className='container mx-auto mt-20'>
          { this.props.authedUser !== null
            ? <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/poll/:id' component={Poll} />
                <Route path='/404' component={NotFound} />
              </Switch>
            : <Login />}
        </div>
      </>
    )
  }
}

/**
 * @param {string} authedUser - authenticated user id
 */
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

/**
 * @see {@link https://react-redux.js.org/api/connect}
 */
export default connect(mapStateToProps)(App)
