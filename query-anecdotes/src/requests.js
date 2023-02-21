import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAnecdotes = async () => {
  const res = await axios(`${baseUrl}/anecdotes`);
  return res.data;
};

const newAnecdote = async (a) => {
  const res = await axios.post(`${baseUrl}/anecdotes`, a);
  return res.data;
};

const updateAnecdote = async (updated) => {
  const res = await axios.put(`${baseUrl}/anecdotes/${updated.id}`, updated);
  return res.data;
};

export { getAnecdotes, newAnecdote, updateAnecdote };
