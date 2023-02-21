import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { useNotifDispatch } from './NotifContext';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { getAnecdotes, updateAnecdote } from './requests';

const App = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotifDispatch();

  const query = useQuery(['anecdotes'], getAnecdotes, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const updateMutation = useMutation(updateAnecdote, {
    onSuccess: (updatedAnecdote) => {
      // queryClient.invalidateQueries(['anecdotes']);
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(
        ['anecdotes'],
        anecdotes.map((a) =>
          a.id === updatedAnecdote.id ? updatedAnecdote : a
        )
      );
    },
  });

  if (query.isLoading) return <div>loading...</div>;
  if (query.isError) return <div>not available due to server problems</div>;

  const anecdotes = query.data;

  const handleVote = (anecdote) => {
    updateMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    dispatch({ type: 'vote', text: anecdote.content });
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes
        // .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
