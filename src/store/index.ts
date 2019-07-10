import {createStore, applyMiddleware} from 'redux'
import RootReducer from './reducers'



const createStoreWithMiddleware = applyMiddleware()(createStore)

let appStore: any;

if(process.env.NODE_ENV === 'production'){

  appStore = createStoreWithMiddleware(RootReducer)

}else{
  appStore = createStoreWithMiddleware(
    RootReducer,
    /**  force cast~  https://github.com/zalmoxisus/redux-devtools-extension/issues/134#issuecomment-379861240 */
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
}


export {appStore}