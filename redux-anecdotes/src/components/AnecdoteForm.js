import { useDispatch } from 'react-redux';
import { newAnecdote } from '../reducers/anecdoteReducer';
import { setNotif, clearNotif } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const createAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    dispatch(newAnecdote(content));
    dispatch(
      setNotif({
        text: `Added new note: '${
          content.length < 40 ? content : content.substring(0, 41) + '...'
        }'`,
        timer: setTimeout(() => dispatch(clearNotif()), 5000)
      })
    );
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
