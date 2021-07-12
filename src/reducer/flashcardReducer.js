import { SET_FLASHCARD, FLIP_FLASHCARD } from '../actions'

const defaultGrid = () => {
	const arr = []
	for (let i = 0; i < 64; i += 1) {
		arr.push('#ccc')
	}
	return arr
}

const flashcardReducer = (state = defaultGrid(), action) => {
	switch(action.type) {
		case SET_FLASHCARD:
			return state.map((color, i) => {
				if (action.payload.index === i) {
					return action.payload.color
				}
			})

		case FLIP_FLASHCARD : 
			return state.map(() => action.payload.color)

		default:
			return state
	}
}

export default flashcardReducer