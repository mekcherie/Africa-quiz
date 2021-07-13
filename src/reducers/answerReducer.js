import { PICK_FLASHCARD, FLIP_FLASHCARD } from '../actions'

const answerReducer = (state = [], action) => {
	switch(action.type) {
	  case PICK_FLASHCARD:
		const { flashcard, answer } = action.payload
		return [...state, { flashcard, answer }]
  
	  case FLIP_FLASHCARD:
		return state.map((item, index) => {
		  if (index !== action.payload.index) {
			return item
		  }
		  return action.payload.flashcard
		})
  
	  default:
		return state
	}
  }
  export default answerReducer