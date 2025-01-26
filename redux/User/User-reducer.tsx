import { createSlice } from '@reduxjs/toolkit'

const initialState: User = {
};

export const counterSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer