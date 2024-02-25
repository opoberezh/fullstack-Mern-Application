import { createSelector } from "@reduxjs/toolkit";

export const selectTheme = state => state.theme.mode;

export const selectUser = state => state.auth.user;
