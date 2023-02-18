import Filter from './components/Filter';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => (
  <div>
    <h2>Anecdotes</h2>
    <Notification />
    <Filter />
    <AnecdoteList />
    <AnecdoteForm />
  </div>
);

export default App;
