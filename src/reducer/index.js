import { combineReducers } from 'redux'
import flashcardReducer from './flashcardReducer'
import answerReducer from './answerReducer'
import rootReducer from './reducers'

const rootReducer = combineReducers({
	flashcard: flashcardReducer,
	answer: answerReducer
})

export default rootReducer 