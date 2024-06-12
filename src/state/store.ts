import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./reducer/fetchSlice";

export const store = configureStore({
   reducer: {
      wikipedia: fetchSlice,
   },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store