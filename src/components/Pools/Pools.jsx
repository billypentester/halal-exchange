import React from 'react'
import Card from './../Utilities/Card'

import topPools from './../../images/topPools.png'
import checkLiquidity from './../../images/checkLiquidity.png'
import createPool from './../../images/createPool.png'

function Pools() {

  const content = [
    {
      image: createPool,
      title: "Create Pool",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/pools/create"
    },
    {
      image: checkLiquidity,
      title: "Check Liquidity",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/pools/liquidity"
    },
    {
      image: topPools,
      title: "Top Pools",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/pools/top"
    },
  ]

  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div class="py-5 text-center">
        <h1 class="display-6">Pools</h1>
      </div>

      <div class="d-flex mb-5 justify-content-evenly flex-wrap">
        {content.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} text={item.text} button={item.button} link={item.link} />
        ))}
      </div>

    </div>
  )
}

export default Pools