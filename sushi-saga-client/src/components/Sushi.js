import React from 'react'

const Sushi = (props) => {

  const {id, name, img_url, price, eaten } = props.sushi;

  return (
    <div className="sushi">
      <div className="plate" 
          onClick={ () => props.eatSushi(id)} >
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img src={img_url} alt={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi