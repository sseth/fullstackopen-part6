import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: '',
  timer: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotif(state, action) {
      clearTimeout(state.timer);
      return action.payload;
    },
    clearNotif(state, action) {
      return initialState;
    },
  },
});

export default notificationSlice.reducer;
export const { setNotif, clearNotif } = notificationSlice.actions;
