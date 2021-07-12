import React, {useState } from 'react';
import FlashcardList from './FlashcardList';
import questions from './questions';
import Header from './Header';
import './flashcard.css';

function App() {
   const [flashcards, setFlashcards ] = useState(questions,  Header)
    return (
      <FlashcardList flashcards={flashcards} />
    );
  }
  export default App;
  // return (
//     <div className="App">
//       <FlashcardList />
//       <flashcard />
//       <questions />
//       <Header />
//     </div>
//   );
// }
//   const [flashcards, setFlashcards ] = useState(questions,  Header)
//   return (
//     <FlashcardList flashcards={flashcards} />
//   );
// }

