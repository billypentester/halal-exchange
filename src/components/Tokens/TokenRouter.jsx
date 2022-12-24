import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Tokens from './Tokens'
import TokenStats from './TokenStats'

function TokenRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Tokens /> } />
            <Route path="/statistics" element={ <TokenStats /> } />
        </Routes>
    </>
  )
}

export default TokenRouter