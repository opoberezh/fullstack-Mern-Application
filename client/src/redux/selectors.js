

export const selectTheme = state => state.theme.mode;

export const selectUser = state => state.auth.user;

export const selectIsToken = state => state.auth.token;

export const selectPosts = state => state.auth.posts;

export const selectFriends = state => state.auth.user.friends;

export const selectLoggedInUserId = state => state.auth.user._id;
