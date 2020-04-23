import styled from 'styled-components';
import useStats from '../utils/useStats';

export default function Stats({ url }) {
  const { stats,loading } = useStats(url);
//   console.log(stats)
if(loading) return <p>loading....</p>
  return (
    <div>
      {stats}
    </div>
  )
}