export const PICK_FLASHCARD = 'PICK_FLASHCARD'
export const FLIP_FLASHCARD= 'FLIP_FLASHCARD'

export const flipFlashcard = (index, flashcard, answer) => {
	return {
		type: FLIP_FLASHCARD,
		payload: {index, flashcard, answer}
	}
}

export const pickFlashcard = (flashcard, question) => {
	return {
		type: PICK_FLASHCARD, 
		payload: { flashcard,question }
	}
}

