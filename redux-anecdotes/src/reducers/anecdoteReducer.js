import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdoteService';

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (content) => ({
//   content,
//   id: getId(),
//   votes: 0,
// });

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    append(state, action) {
      state.push(action.payload);
    },
    newAnecdote(state, action) {
      state.push(action.payload);
    },
    addVote(state, action) {
      const id = action.payload;
      const target = state.find((a) => a.id === id);
      return state.map((a) =>
        a.id === id ? { ...target, votes: target.votes + 1 } : a
      );
    },
  },
});

export default anecdoteSlice.reducer;
export const { append, setAnecdotes, addVote } = anecdoteSlice.actions;

export const initialize = () => {
  return async (dispatch) => {
    const data = await anecdoteService.getAll();
    dispatch(setAnecdotes(data));
  };
};

export const newAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(append(newAnecdote));
  };
};

export const vote = (a) => {
  return async (dispatch) => {
    await anecdoteService.addVote(a);
    dispatch(addVote(a.id));
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'VOTE':
//       const id = action.payload.id;
//       const target = state.find((a) => a.id === id);
//       return state.map((a) =>
//         a.id === id ? { ...target, votes: target.votes + 1 } : a
//       );
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload]
//     default:
//       return state;
//   }
// };

// export const vote = (id) => ({
//   type: 'VOTE',
//   payload: { id },
// });

// export const newAnecdote = (content) => ({
//   type: 'NEW_ANECDOTE',
//   payload: asObject(content)
// });
