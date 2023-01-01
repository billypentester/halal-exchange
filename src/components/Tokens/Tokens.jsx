import React, {useEffect} from 'react'
import Card from './../Utilities/Card'
import Seo from './../Utilities/Seo'

import topPools from './../../images/topPools.png'
import createPool from './../../images/createPool.png'

function Tokens() {

  useEffect(() => {
    Seo({
      title: "Tokens",
      description: "Tokens page",
    })
  }, []);

  const content = [
    {
      image: createPool,
      title: "Create Token",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/tokens/create"
    },
    {
      image: topPools,
      title: "Top Tokens",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "New Position",
      link: "/tokens/top"
    }
  ]

  return (
    <div className="container" style={{ marginTop:'4rem' }}>

      <div className="py-5 text-center">
        <h1 className="display-6">Tokens</h1>
      </div>

      <div className="d-flex mb-5 justify-content-evenly flex-wrap">
        {content.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} text={item.text} button={item.button} link={item.link} />
        ))}
      </div>

    </div>
  )
}

export default Tokens