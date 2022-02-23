import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';


function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);


  const increm = () => {
    dispatch({type: 'increment'});
  }

  return (
    <div>
      <button onClick={increm}>increm</button>
      <Counter counter={counter} />


    </div>
  );
}

export default App;
