import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const addPlant=async ()=>{
        toast.loading("Adding Plant....")
        if(!name || !category || !price || !image || !description ){
            toast.error("Please enter all details")
            return
        }
        const response=await axios.post(`${process.env.REACT_APP_API_URL}/plant`,{
            name:name,
            price:price,
            category:category,
            image:image,
            description:description
        })
        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setCategory("")
        setDescription("")
        setImage("")
        setPrice("")
    }

    return (
        <div>
            <h1 className='title'>AddPlant</h1>
            <form>
                <input
                    type='text'
                    placeholder='Enter Plant Name: '
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='ipbox'
                />
                <input
                    type='text'
                    placeholder='Enter Plant Category: '
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='ipbox'
                />
                <input
                    type='text'
                    placeholder='Enter Plant Price: '
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='ipbox'
                />
                <img src={image} className='image'/>
                <input
                    type='text'
                    placeholder='Enter Plant Image Url: '
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='ipbox'
                />
                <input
                    type='text'
                    placeholder='Enter Plant Description: '
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='ipbox'
                />

                <button type='button' onClick={addPlant} className='btn'>Add Plant</button>
            </form>
            <Link to="/">Back to Home</Link>
            <Toaster/>
        </div>
    )
}

export default AddPlant