import React, {useState }from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from "./reducers";
import './flashcard.css';
import FlashcardList from './FlashcardList';
import questions from './questions';

function App() {
  const store = createStore(reducers);
   const [flashcards ] = useState(questions, reducers)
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Information/Quiz about Africa </h1>
          <p>Pooling your knowledge about the mystery people.</p>
        </header>
        <FlashcardList flashcards={flashcards} />
      </div>
      </Provider>
    );
  }
  export default App;






 