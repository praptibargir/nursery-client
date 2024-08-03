import React from 'react'
import "./PlantCard.css"
import edit from "./edit.png"
import del from "./delete.png"
import axios from 'axios'
import toast from 'react-hot-toast'

function PlantCard({_id,name,category,image,price,description,loadPlants}) {

  const deletePlant=async (plantId)=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)
    toast.success(response.data.message)
    loadPlants()
  }

  return (
    <div className='plant-card'>
        <img src={image} className='image'/>
        <h1 className='plant-title'>{name}</h1>
        <p className='plant-category'>Category: {category}</p>
        <p className='plant-price'>Price: {price}</p>
        <p className='plant-description'>{description}</p> 
        <div className='btn-container'>
          <img 
          src={edit} 
          className='buttn'
          onClick={()=>{

          }} />
          <img 
          src={del} 
          className='buttn'
          onClick={()=>{
            deletePlant(_id)
          }}/>
        </div>
    </div>
  )
}

export default PlantCard