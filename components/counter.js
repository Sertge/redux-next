import {useDispatch,useSelector} from 'react-redux'

const useCounter = () => {
  const count = useSelector((state)=>state.count)
  const dispatch =useDispatch()
  const reset = ()=> {
    dispatch(
      {type:"RESET"}
    )
  }
  const increment =()=>{
    dispatch({type:'INCREMENT'})
  }
  const decrement = ()=>{
    dispatch({type:"DECREMENT"})
  }
  return {count, increment, decrement, reset}
}

const Counter = () => {
  const {count, increment, decrement, reset}=useCounter()
  return(
    <div>
      <h1>Reducer with states</h1>
      <h2>Count: <span>{count}</span></h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter