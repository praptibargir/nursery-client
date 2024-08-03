import React, { useEffect, useState } from 'react'
import "./UpdatePlant.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function UpdatePlant() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const {id}=useParams();

    const updatePlant=async ()=>{
        const response=await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,{
            name:name,
            category:category,
            price:price,
            image:image,
            description:description
        })

        toast.success(response.data.message)
    }

    const loadPlant= async (id)=>{
        if(!id){
            return
        }

        const response=await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

        const{name,category,price,description,image}=response.data.data

        setName(name)
        setCategory(category)
        setPrice(price)
        setImage(image)
        setDescription(description)
    }

    useEffect(()=>{loadPlant(id)},[id])

    return (
        <div>
            <h1 className='title'>Update Plant </h1>

            <form>
                <input
                    type='text'
                    placeholder='Enter Plant Name '
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='ipbox'
                />
                <input
                    type='text'
                    placeholder='Enter Plant Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='ipbox'
                />
                <input
                    type='text'
                    placeholder='Enter Plant Price '
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='ipbox'
                />
                <img src={image} className='image' alt=' Please add image url to preview..' />
                <input
                    type='text'
                    placeholder='Enter Plant Image Url '
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='ipbox'
                />
                <input
                    type='text'
                    placeholder='Enter Plant Description '
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='ipbox'
                />

                <button type='button' onClick={updatePlant} className='btn'>Update Plant</button>
            </form>
            <button type='button' className='btn'><Link to="/" className='home'>Back to Home</Link></button>
            <Toaster/>
        </div>
    )
}

export default UpdatePlant