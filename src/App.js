import React, { Component } from 'react';

import './App.css';
import models from './data/data'

import NavBar from './components/NavBar/NavBar'
import Megatron from './components/Megatron/Megatron';
import { ModelCards, ModelWrapper } from './components/ModelCards/ModelCards';


let guessArray = [];
class App extends Component {
  state = {
    models: [],
    currentScore: 0,
    topScore: 0,
    guessType: "Click an Image to Begin!"
  };

  componentDidMount() {
    this.setState({models: this.shuffle(models) });
  }
  
  handleGameClick = event => {
    event.preventDefault()
    this.recordGuess(event.target.id)
    this.setState({models: this.shuffle(models) });
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  setHighScore(score) {
    if(score > this.state.topScore) {
      this.setState({topScore: score});
    }
  }

  recordGuess(attempt) {
    if(guessArray.includes(attempt)) {
      this.setState({guessType: "You guessed incorrectly!"});
      this.setHighScore(this.state.currentScore);
      this.setState({currentScore: 0})
      guessArray = [];
    } else {
      guessArray.push(attempt);
      this.setState({guessType: "You guessed correctly!"});
      this.setState({currentScore: guessArray.length})
    }
  }

  render() {
    return (
      <div>
        <NavBar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        guess={this.state.guessType}
        />
        <Megatron />

        <ModelWrapper>
          {this.state.models.map( model => {
            return (
            <ModelCards
            key={model.id}
            id={model.id}
            image={process.env.PUBLIC_URL + model.image}
            onClick={this.handleGameClick}
            />
          );
          })}
        </ModelWrapper>

      </div>
    );
  }
}

export default App;
