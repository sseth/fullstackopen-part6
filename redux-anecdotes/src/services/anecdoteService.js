import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAll = async () => {
  const res = await axios(`${baseUrl}/anecdotes`);
  return res.data;
};

const createNew = async (content) => {
  const res = await axios.post(`${baseUrl}/anecdotes`, { votes: 0, content });
  return res.data;
};

const addVote = async (a) => {
  const res = await axios.put(`${baseUrl}/anecdotes/${a.id}`, {
    ...a,
    votes: a.votes + 1
  });
  return res
}

const anecdoteService = { getAll, createNew, addVote };
export default anecdoteService;
