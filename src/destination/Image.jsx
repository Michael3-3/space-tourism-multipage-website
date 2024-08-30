import React from 'react'
import data from '../../starter-code/data.json'

const Image = () => {
    console.log(data.destinations[0].images.png);
  return (
    <div>Image
        <img src="../../starter-code/assets/destination/image-moon.png" alt="imge" />
    </div>
  )
}

export default Image