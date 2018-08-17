import React from 'react';

export default class Games extends React.Component {
  state = {
    hideNSeek: 0,
    stuckInTheMud: 0,
    humansKilled: 0
  }

  componentDidMount() {
    setInterval(() => this.setState({hideNSeek: this.state.hideNSeek + 1}), 900)
    setInterval(() => this.setState({stuckInTheMud: this.state.stuckInTheMud + 1}), 1100)
    setInterval(() => this.setState({humansKilled: this.state.humansKilled + 1}), 1000)
  }

  render() {
    return (
      <div style={{ padding: 40 }}>
        <p>what about some games?</p>
        <ol>
          <li>hide and seek: {this.state.hideNSeek}</li>
          <li>stuck in the mud: {this.state.stuckInTheMud}</li>
          <li>humans killed: {this.state.humansKilled}</li>
        </ol>
      </div>
    )
  }
}