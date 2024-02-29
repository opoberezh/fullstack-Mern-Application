import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  user: null,
  token: null,
  posts: [],

};

  const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {


    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;


    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;//replacing that single post,
        return post;//otherwise we just return the original post if we didn't find it
      });
      state.posts = updatedPosts;
    },
  },
});

export const {  setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
