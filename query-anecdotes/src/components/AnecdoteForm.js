import { useQueryClient, useMutation } from '@tanstack/react-query';

import { newAnecdote } from '../requests';
import { useNotifDispatch } from '../NotifContext';

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotifDispatch();

  const newAnecdoteMutation = useMutation(newAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote));
    },
    onError: () => {
      dispatch({ type: 'error', text: 'Error: anecdote must be 5 characters or longer' })
    }
  });

  const onCreate = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    newAnecdoteMutation.mutate({ content, votes: 0 });
    dispatch({ type: 'new', text: content });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
