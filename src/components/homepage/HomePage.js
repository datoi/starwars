import React, { useState } from 'react';
import './HomePage.css';
import axios from 'axios';

const VariantDetails = ({ name, height, mass, hairColor }) => (
    <div>
        <h3>Details:</h3>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Hair Color: {hairColor}</p>
    </div>
);

const HomePage = () => {
    const [selectedVariant, setSelectedVariant] = useState('');
    const [selectedVariantName, setSelectedVariantName] = useState('');
    const [selectedVariantDetails, setSelectedVariantDetails] = useState({});
    const [selectedVariantImage, setSelectedVariantImage] = useState('');

    const handleVariantClick = async (variant, image) => {
        setSelectedVariant(variant);

        const response = await axios.get(`https://swapi.dev/api/${variant}`);
        const data = response.data;
        let info = {
            name: data.name,
            height: data.height,
            mass: data.mass,
            hairColor: data.hair_color,
        };

        setSelectedVariantDetails(info);
        setSelectedVariantName(info.name);
        setSelectedVariantImage(image);
    };

    const variants = [
        { variant: 'people/1/', image: 'skywalker.png' },
        { variant: 'people/2/', image: 'C-3PO_EP3.webp' },
        { variant: 'people/3/', image: 'r2d2.gif' },
        { variant: 'people/4/', image: 'darthvader.gif'},
    ];

    return (
        <div className="container">
            <div className="left-panel">
                <h2>Choose a Variant:</h2>
                <ul>
                    {variants.map((item, index) => (
                        <button key={index} onClick={() => handleVariantClick(item.variant, item.image)}>
                            Choose
                        </button>
                    ))}
                </ul>
            </div>
            <div className="right-panel">
                {selectedVariant && (
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/${selectedVariantImage}`}
                             style={{ width: '200px', height: '200px' }}
                             alt="Selected Variant" />
                        <p>
                            You have selected: <strong>{selectedVariantName}</strong>
                        </p>
                        <VariantDetails
                            name={selectedVariantDetails.name}
                            height={selectedVariantDetails.height}
                            mass={selectedVariantDetails.mass}
                            hairColor={selectedVariantDetails.hairColor}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;