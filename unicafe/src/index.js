import ReactDOM from 'react-dom/client';
import { Stats, Button } from './components';

import { createStore } from 'redux';
import counterReducer from './counterReducer';

const store = createStore(counterReducer);

const App = () => (
  <div>
    <h1>give feedback</h1>
    <div style={{ display: 'flex' }}>
      <Button text="good" onClick={() => store.dispatch({ type: 'GOOD' })} />
      <Button text="neutral" onClick={() => store.dispatch({ type: 'OK' })} />
      <Button text="bad" onClick={() => store.dispatch({ type: 'BAD' })} />
      <Button
        text="reset stats"
        onClick={() => store.dispatch({ type: 'ZERO' })}
      />
    </div>
    <h1>statistics</h1>
    <Stats data={store.getState()} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => root.render(<App />);

store.subscribe(renderApp);
renderApp();
