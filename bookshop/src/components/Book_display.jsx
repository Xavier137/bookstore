import React from 'react'

const Book_display = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
      </div>
    </div>
  )
}

export default Book_display
