import { createstore, applymiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState ={}
const middleware = [thunk]

let store;

store = createstore(rootReducer,initialState,compose(applymiddleware(...middleware)))

export default store;