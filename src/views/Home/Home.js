import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'
import addImage from "./add-icon.png"
import { Link } from 'react-router-dom';

function Home() {

    const [plant, setPlant] = useState([])

    const loadPlants = async () => {
        toast.loading("Loading Plants.....")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
        toast.dismiss()
        toast.success("Plants loaded successfully..")
        setPlant(response.data.data)
    }

    useEffect(() => {
        loadPlants()
    }, [])

    return (
        <>
            <h1 className='title'>Plants</h1>
            <div className='container'>
                {
                    plant.map((plant, i) => {
                        const { _id,
                            name,
                            category,
                            image,
                            price,
                            description } = plant
                        return <PlantCard
                            key={i}
                            _id={_id}
                            name={name}
                            category={category}
                            image={image}
                            price={price}
                            description={description} 
                            loadPlants={loadPlants}/>
                    })
                }
                <Toaster />
            </div>
            <Link to="/add">
                <img src={addImage} className='btn-add' />
            </Link>
        </>

    )
}

export default Home