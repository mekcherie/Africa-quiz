import React from 'react';
import { usequestions} from 'react-router-dom';
// import './RandomSpace.css';
import question from './questions';
// import './RandomSpace.css';


function Random() {
    const questions = usequestions()
  return (
    // <div className="RandomSpace">
        <button onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            questions.push(`/questions/${id}`)
        }}>Show me a random question</button>
        // </div>
  )
}

export default Random