import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { sushi, buySushiHandler } = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => buySushiHandler(sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          !sushi.clicked && <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi