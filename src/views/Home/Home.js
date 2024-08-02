import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'

function Home() {

    const[plant,setPlant]=useState([])

    const loadPlants=async()=>{
        toast.loading("Loading Plants.....")
        const response=await axios.get(`http://localhost:8000/plants`)
        toast.dismiss()
        toast.success("Plants loaded successfully..")
        setPlant(response.data.data)
    }

    useEffect(()=>{
        loadPlants()
    },[])

  return (
    <div>
        <h1>Plants</h1>
        {
            plant.map((plant,i)=>{
                const {_id,
                    name,
                    category,
                    image,
                    price,
                    description}=plant
                return <PlantCard 
                key={i}
                _id={_id} 
                name={name} 
                category={category} 
                image={image} 
                price={price} 
                description={description}/>
            })
        }
        <Toaster/>
    </div>
    
  )
}

export default Home