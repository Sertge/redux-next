import {useSelector, shallowEqual} from 'react-redux'

const useClock = ()=> {
  return useSelector(
    (state)=>({
      lastUpdate:state.lastUpdate,
      light: state.light
    }),
    shallowEqual
  )
}
const formatTime = (time)=>{
  return new Date(time).toJSON().slice(11,19)
}

const Clock = ()=>{
  const {lastUpdate,light}= useClock()
  return (
    <div className={light?"p-4 inline-block text-white bg-green-400":"p-4 inline-block text-green-400 bg-black"}>
      {formatTime(lastUpdate)}
    </div>
  )
}

export default Clock