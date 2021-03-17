import React from 'react'
import Cardback from '../CardBack'

const Deck = () => {
  return (
    <div>
      {(let i = 0, i < 52, i++) {
        return <CardBack />
      }}
    </div>
  )
}

export default Deck
