import { createSlice } from '@reduxjs/toolkit';

const wikipediaSlice = createSlice({
   name: 'wikipedia',
   initialState: [],
   reducers: {
      setEntities: (state, action) => {
         return action.payload;
      },
   },
});

export const { setEntities } = wikipediaSlice.actions;
export default wikipediaSlice.reducer;