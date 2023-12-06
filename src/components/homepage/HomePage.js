import React from 'react';
import './HomePage.css';
import Login from "../login/Login";

const HomePage = () => {
    const {
        selectedVariant,
        selectedVariantName,
        selectedVariantDetails,
        selectedVariantImage,
        handleVariantClick,
        variants,
    } = Login();

    return (
        <div className="container">
            <div className="left-panel">
                <h2>Choose a Variant:</h2>
                <ul>
                    {variants.map((item, index) => (
                        <button key={index} onClick={() => handleVariantClick(item.variant, item.image)}>
                            <strong>{item.variantName}</strong>
                        </button>
                    ))}
                </ul>
            </div>
            {selectedVariant? (
                <div className="right-panel">
                    <div>
                        <p>
                            You have selected: <strong>{selectedVariantName}</strong>
                        </p>
                        <div className='description'>
                            <div>
                                <div>
                                    <h3>Details:</h3>
                                    <p>Name: {selectedVariantDetails.name}</p>
                                    <p>Height: {selectedVariantDetails.height}</p>
                                    <p>Mass: {selectedVariantDetails.mass}</p>
                                    <p>Hair Color: {selectedVariantDetails.hairColor}</p>
                                </div>
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}/${selectedVariantImage}`}
                                     style={{ width: '200px', height: '200px' }}
                                     alt="Selected Variant"/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <button>select</button>
        </div>
    );
};

export default HomePage;