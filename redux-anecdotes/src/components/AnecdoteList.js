import { useSelector, useDispatch } from 'react-redux';

import { vote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) =>
    state.anecdotes
      .filter((a) => a.content.includes(state.filter))
      .sort((a, b) => b.votes - a.votes)
  );

  const addVote = (a) => {
    dispatch(vote(a));
    dispatch(setNotification('Voted for', a.content, 5));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes{' '}
            <button onClick={() => addVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
