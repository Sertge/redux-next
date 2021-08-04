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
      <div className='flex space-x-2 align-middle justify-start'>
        <button onClick={increment} className='border-green-400 border rounded-xl bg-green-500 px-1 text-white'>Increase</button>
        <button onClick={decrement} className='border-red-400 border rounded-xl bg-red-500 px-1 text-white'>Decrease</button>
        <button onClick={reset} className='border-blue-400 border rounded-xl bg-blue-500 px-1 text-white'>reset</button>
      </div>
    </div>
  )
}

export default Counter