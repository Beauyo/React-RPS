import React, { Component } from 'react';
import { Container, Button, } from 'semantic-ui-react';


class App extends Component {
  state = { 
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors"
    }

    userChoice = () => {
    
    }

    handleClick = () => {
      
    }

  render() {
    return (
      <Container>
        <Button color="blue" onClick={() => this.userChoice() }>Rock</Button>
        <Button color="blue" onClick={() => this.userChoice() }>Paper</Button>
        <Button color="blue" onClick={() => this.userChoice() }>Scissors</Button>
      </Container>
   
    );
  }
}

export default App;
