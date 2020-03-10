import React, { Component } from 'react'
import InputCard from './InputCard'
import DisplayCard from './DisplayCard'
import { connect } from 'react-redux'

class GameInterface extends Component {
    render() {
        return (
            <>
                <h1>Hi there, {this.props.uName}!</h1> 
                <div id="game-container">
                    <InputCard />
                    <DisplayCard /> 
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        uName: state.username
    }
}

export default connect(mapStateToProps)(GameInterface)