import { combineReducers } from 'redux';
import goodsReducer from './goodsCounter';
import stockReducer from './stockCounter';



// combineReducers 함수로 두 reducer를 합친다.
const rootReducer = combineReducers({
  goodsReducer,
  stockReducer
})

export default rootReducer;