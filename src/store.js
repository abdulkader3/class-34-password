import { configureStore } from '@reduxjs/toolkit'
import shanto from './Slices/shanto'

export default configureStore({
  reducer: {
    prity: shanto,
  },
})
