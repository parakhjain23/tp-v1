import { createSlice } from '@reduxjs/toolkit'

const initialState: ProductSpaceState = {
  producSpaces: [],
};

export const counterSlice = createSlice({
  name: 'ProductSpace',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer