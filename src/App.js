import Counter from './Counter'
import { useSelector } from 'react-redux';

function App() {

  const count = useSelector(state => state.counter.count)

  return (
    <div className="App">
      <h3>Count in Parent: {count}</h3>
      <Counter />
    </div>
  );
}

export default App;
