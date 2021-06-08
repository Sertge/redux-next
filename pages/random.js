import NavVar from '../components/nav-var'
import Clock from '../components/clock'
import Counter from '../components/counter'
import {useDispatch} from 'react-redux'
import { useRef } from 'react'
import Head from 'next/head'

const RandomPage=()=>{
  const dispatch = useDispatch()
  const theRef=useRef(null)
  theRef.current=setInterval(()=>{dispatch({type:"TICK",light:true,lastUpdate:Date.now()})},1000)

  return(
    <div>
      <Head>
      <title>Random stuff</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <NavVar/>
      <div className="p-2">
        <p>In this page, I will put some random stuff I create</p>
        <p>For example, this is a clock from Next.js example github</p>
        <Clock/>
        <p>As well as a counter</p>
        <Counter/>
        <p>Enjoy</p>
      </div>
      
    </main>
    </div>
    
  )
}

export default RandomPage