import React from 'react'
import logo from '../../img/sample_logo.jpg'

export default class ContentScreen extends React.Component {
  constructor (props) {
    super()

    this.state = {
      mode: 'home'
    }

    this.changeMode = this.changeMode.bind(this)
  }

  changeMode (mode) {
    this.setState({
      mode
    })
  }

  render () {
    return (
      <div className='contentScreen'>
        <img src={logo} alt='Logo' />
        <h1>Hello World!</h1>
        <span>Sample Property in Redux: {this.props.sampleProperty}</span>
        <button onClick={() => this.props.changeSampleProperty('Hello')}>
          Change Sample Property in Redux
        </button>
      </div>
    )
  }
}
