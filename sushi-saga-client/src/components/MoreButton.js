import React from 'react'

const MoreButton = (props) => {
  const { nextFourSushi } = props
    return <button onClick={nextFourSushi}>
            More sushi!
          </button>
}

export default MoreButton