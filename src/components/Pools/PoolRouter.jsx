import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Pools from './Pools'
import CreatePool from './CreatePool'
import PoolLiquidity from './PoolLiquidity'
import TopPools from './TopPools'
import PoolStats from './PoolStats'

function PoolRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Pools /> } />
        <Route path="/create" element={ <CreatePool /> } />
        <Route path="/liquidity" element={ <PoolLiquidity /> } />
        <Route path="/top" element={ <TopPools /> } />
        <Route path="/stats/:id" element={ <PoolStats /> } />
      </Routes>
    </>
  )
}

export default PoolRouter