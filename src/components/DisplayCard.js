import React, { Component } from 'react'
import { connect } from 'react-redux'

class DisplayCard extends Component {
    render() {
        return (
            <div className="card">
                <h3>Display Card</h3>
                <div id="word"><span>{this.props.word}</span></div>
            </div>
        )
    }
}

const mSTP = state => {
    return {
        word: state.userInput
    }
}

export default connect(mSTP)(DisplayCard)
