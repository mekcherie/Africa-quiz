import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { setFlashcard } from './actions'
import Flashcard from './Flashcard'

function FlashcardList({flashcards}) {
        return (
            <div className="card-grid">
                {flashcards.map(flashcard => {
                    return <Flashcard flashcard={flashcard} key ={flashcard.id} />
                })}
            </div>
        )
    }

    export default FlashcardList


// function FlashcardList() {
// 	const arr = useSelector(state => state.flashcard)
// 	const selectedFlashcard = useSelector(state => state.flashcard)
// 	const dispatch = useDispatch()

// 	return (
// 		<div className="card-grid">
// 			{arr.map((flashcard, i) => <div 
// 				style={{ flashcardlist: flashcard }} 
// 				onClick={() => dispatch(setFlashcard(selectedFlashcard, i))}
// 			/>)}
// 		</div>
// 	)
// }

