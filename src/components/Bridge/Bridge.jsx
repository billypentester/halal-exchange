import React from 'react'
import Card from './../Utilities/Card'

import topPools from './../../images/topPools.png'
import checkLiquidity from './../../images/checkLiquidity.png'
import createPool from './../../images/createPool.png'

function Bridge() {

  const content = [
    {
      image: topPools,
      title: "Use Bridge",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/bridge/use"
    },
    {
      image: checkLiquidity,
      title: "Liquidity to Bridge",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/bridge/liquidity"
    }
  ]

  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div class="py-5 text-center">
        <h1 class="display-6">Bridge</h1>
      </div>

      <div class="d-flex mb-5 justify-content-evenly flex-wrap">
        {content.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} text={item.text} button={item.button} link={item.link} />
        ))}
      </div>

    </div>
  )
}

export default Bridge