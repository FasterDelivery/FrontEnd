import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = {
  name: "",
  lastname: "",
  email: "",
  address: "",
  phone: ""
};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    console.log(state, action);
  });
});

export default usersReducer;
