import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const { sushi, nextFourSushi, buySushiHandler } = props
  return (
    <Fragment>
      <div className="belt">
        {
          sushi.map(sush => {
            return <Sushi key={sush.id} sushi={sush} buySushiHandler={buySushiHandler}/>
          })
        }
        <MoreButton nextFourSushi={nextFourSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer