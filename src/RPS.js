import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import Result from './Result'

class RPS extends React.Component {
    state = { 
        displayResult: false,
        choices: ['Rock', 'Paper', 'Scissors'], 
        result: '', 
        userScore: 0, 
        compScore: 0,
        userHand: '',
        compHand: ''
      }

    rock = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        this.setState({userHand: 'Rock'})
        if (compChoice === 'Rock') {
            this.setState({result: 'Tie!'})
        } else if (compChoice === 'Scissors') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1, compHand: compChoice})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1, compHand: compChoice})
        }
        this.setState({displayResult: true})
    }

    paper = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        this.setState({userHand: 'Paper'})
        if (compChoice === 'Paper') {
            this.setState({result: 'Tie!', compHand: compChoice}) 
        } else if (compChoice === 'Rock') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1, compHand: compChoice})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1, compHand: compChoice})
        }
        this.setState({displayResult: true})
    }

    scissors = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        this.setState({userHand: 'Scissors'})
        if (compChoice === 'Scissors') {
            this.setState({result: 'Tie!', compHand: compChoice})
        } else if (compChoice === 'Paper') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1, compHand: compChoice})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1, compHand: compChoice})
        }
        this.setState({displayResult: true})
    }

    handleReset = () => {
        this.setState({displayResult: false, userScore: 0, compScore: 0})
    }

    render () {
        return (
          <Container>
              <Button onclick={this.rock}>Rock</Button>
              <Button onclick={this.paper}>Papaer</Button>
              <Button onclick={this.scissors}>Scissors</Button>
          </Container>
            <Container>
              { this.state.displayResult && <Result results={this.state.result} userScore={this.state.userScore} compScore={this.state.compScore} userHand={this.state.userHand} compHand={this.state.compHand} /> }
            </Container>
           <Container>
              <Button onClick={this.handleReset}>Reset</Button>
           </Container>
        )
    }
}

export default RPS