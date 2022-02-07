
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './redux/ducks/counter'

export default function Counter() {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    

    return (
    <div>
        <h3>Count in child: {count}</h3>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>

    </div>
    )
}
