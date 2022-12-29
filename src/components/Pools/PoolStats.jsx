import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import pools from './../../data/pools'
import { Link } from 'react-router-dom'

function PoolStats() {

  const { id } = useParams();

  const [poolStat, setPoolStat] = React.useState('');

  useEffect(() => {
    const pool = pools.filter((pool) => pool.id == id);
    console.log(pool[0]);
    setPoolStat(pool[0]);
  },[id])

  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div class="p-5 bg-light h-25">
        <div class="d-flex align-items-center">
          {/* <div class="me-2">
            <img src={poolStat.tokensPicture[0].picture} alt="" class="img-fluid" style={{ width:'50px' }} />
            <img src={poolStat.tokensPicture[1].picture} alt="" class="img-fluid" style={{ width:'50px' }} />
          </div> */}
          <h1 class="">{poolStat.name}</h1>
        </div>
        <nav class="d-flex">
          <h6 class="mb-0">
            <Link to="/pools" class="text-reset">Pools</Link>
            <span> / </span>
            <Link to="/pools/top" class="text-reset text-decoration-underline">Top Pools</Link>
          </h6>
        </nav>
      </div>

    </div>
  )
}

export default PoolStats