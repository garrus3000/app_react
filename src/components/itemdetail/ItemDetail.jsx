import React from 'react'
import "./itemDetail.css"

function itemDetail({item}) {
  return (
    <div className='itemDetail__layout'>
      <p className=''>{item.title}</p>
      <p className='itemDetail__layout'>{item.price}</p>
    </div>
  )
}

export default itemDetail