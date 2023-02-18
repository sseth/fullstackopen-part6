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

export const setNotification = (prefix, text, time) => {
  text = `${prefix} '${
    text.length > 40 ? text.substring(0, 41) + '...' : text
  }'`;

  return (dispatch) => {
    const timer = setTimeout(() => dispatch(clearNotif()), time * 1000);
    dispatch(setNotif({ text, timer }));
  };
};
