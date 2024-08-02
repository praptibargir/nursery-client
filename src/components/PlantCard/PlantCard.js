import React from 'react'
import "./PlantCard.css"

function PlantCard({_id,name,category,image,price,description}) {
  return (
    <div className='plant-card'>
        <img src={image} className='image'/>
        <h1 className='plant-title'>{name}</h1>
        <p className='plant-category'>Category: {category}</p>
        <p className='plant-price'>Price: {price}</p>
        <p className='plant-description'>{description}</p> 
    </div>
  )
}

export default PlantCard