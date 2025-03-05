import { configureStore } from '@reduxjs/toolkit'
import saveSlice from './createReducer.jsx'
export default configureStore({
  reducer:
  {
    cart: saveSlice
  }
})