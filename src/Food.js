import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
export default function Food() {
    let SearchApi = () => {
        const [Image, setImage] = useState([]);
        useEffect(() => {
            axios.get("https://api.unsplash.com/search/photos?page=1&query=Food&client_id=5x0ImwPh01TABg5wGSo6-GoR6eoQltLjMEpniywwbvo")
                .then((res) => {
                    setImage(res.data.results)
                })
        }, [Image])
        return Image;
    }
    const data = SearchApi();
    return (
        <>
            <div>
                <h1 style={{ fontSize: "50px" }}>Food</h1>
            </div>
            <div className='food-container'>
                <div>
                    {
                        data.map((index, i) => {
                            return (<div key={i}>
                                <img src={index.urls.thumb} width="350px" height="350px" />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}