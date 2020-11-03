import React from 'react'
import ContentScreen from './containers/ContentScreen'
import '../stylesheets/index.scss'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <ContentScreen />
      </div>
    )
  }
}
