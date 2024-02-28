
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {

      state.mode = state.mode === "light" ? "dark" : "light";
      console.log("New mode:", state.mode);

    },
  }
});

export const { setMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

