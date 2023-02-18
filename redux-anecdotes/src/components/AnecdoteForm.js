import { useDispatch } from 'react-redux';

import { newAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const createAnecdote = async (e) => {
    e.preventDefault();

    const content = e.target.content.value;
    e.target.content.value = '';

    dispatch(newAnecdote(content));
    dispatch(setNotification('Added new note:', content, 5));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
