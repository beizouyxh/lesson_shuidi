import { useState} from 'react';   //共享状态的useState 的方法

export default function Stats({url}){
//    console.log(url);
  const [stats , setStats]=useState();
  const [loading, setLoading]=useState(true);
  const [error,setError]=useState();
  return (
      stats,
      loading,
      error
  )
}