import classes from './Counter.module.css';
import {counterActions} from '../store/index';
import {useSelector, useDispatch} from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
   dispatch(counterActions.increment());
  };


  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    //dispatch({type: 'increase', amount: 5})
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload:10}
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    console.log({counter});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}> Increase By 5</button>
        <button onClick={decrementHandler}> Decrement</button>
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
