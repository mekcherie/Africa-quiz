export const SET_FLASHCARD = 'SET_FLASHCARD'
export const PICK_FLASHCARD = 'PICK_FLASHCARD'
export const FLIP_FLASHCARD= 'FLIP_FLASHCARD'

export const flipFlashcard = (flashcard) => {
	return {
		type: FLIP_FLASHCARD,
		payload: {flashcard}
	}
}

export const setFlashcard = (flashcard, index) => {
	return {
		type: SET_FLASHCARD,
		payload: { flashcard, index }
	}
}

export const pickFlashcard = (flashcard) => {
	return {
		type: PICK_FLASHCARD, 
		payload: { flashcard }
	}
}

