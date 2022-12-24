import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Pools from './Pools'
import TopPools from './TopPools'
import PoolStats from './PoolStats'

function PoolRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Pools /> } />
            <Route path="/top" element={ <TopPools /> } />
            <Route path="/statistics" element={ <PoolStats /> } />
        </Routes>
    </>
  )
}

export default PoolRouter