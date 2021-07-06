import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import questions from './questions';
import './flashcard.css';

function App() {
  const [flashcards,setFlashcards ] = useState(questions)
  return (
    <FlashcardList flashcards={flashcards} />
  );
}
export default App;
