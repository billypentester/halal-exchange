import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Bridge from './Bridge'
import UseBridge from './UseBridge'
import BridgeLiquidity from './BridgeLiquidity'

function PoolRouter() {
  return (
    <>
        <Routes>
          <Route path="/" element={ <Bridge /> } />
          <Route path="/use" element={ <UseBridge /> } />
          <Route path="/liquidity" element={ <BridgeLiquidity /> } />
        </Routes>
    </>
  )
}

export default PoolRouter