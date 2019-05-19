import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
 
import rootReducer from '../reducers/index';
 
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
