import { PICK_FLASHCARD } from '../actions'

const answerReducer = (state = '1', action) => {
	switch(action.type) {
		case PICK_FLASHCARD: 
			return action.payload.flashcard
			
		default:
			return state
	}
}

export default answerReducer