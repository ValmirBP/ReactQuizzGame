import React from 'react';
import './App.css';

const App = () => {

  const startTrivia = async () =>{

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>
  ) => {
    }

    const nextQuestion = () => {

    }

    return (<div className='App'>
      <h1>React Qiuz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score</p>
      </div>
      );
  }

export default App;
