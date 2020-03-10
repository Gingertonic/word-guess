import React, { Component } from 'react'
import { connect } from 'react-redux'

// action creator
const updateInputInStore = word => {
    return {
        type: 'UPDATE_WORD',
        payload: word
    }
}

class InputCard extends Component {
    handleChange = e => {
        this.props.updateInputInStore(e.target.value)
    }

    render() {
        return (
            <div className="card">
               <h3>Input Card</h3> 
               <input 
                type="text" 
                onChange={this.handleChange} 
                placeholder="Your word" 
                value={this.props.word}/>
            </div>
        )
    }
}

const mSTP = state => {
    return { word: state.userInput }
}

// const mDTP = dispatch => {
//     return {
//         updateWord: word => dispatch(updateInputInStore(word))
//     }
// }

export default connect(mSTP, { updateInputInStore })(InputCard)


