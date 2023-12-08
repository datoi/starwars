import React from 'react';
import './HomePage.css';
import Login from "../login/Login";

const HomePage = () => {
    const {
        selectedVariant,
        selectedVariantName,
        selectedVariantDetails,
        selectedVariantImage,
        selectedVariantBackground,
        handleVariantClick,
        variants,
    } = Login();
    const bodyStyle = {
        backgroundImage: selectedVariant ? `url(${process.env.PUBLIC_URL}/${selectedVariantImage})` : 'none',
    };

    return (
        <body style={bodyStyle}>
        <div className='bigBox'>
            <div className="container">
                <div className="left-panel">
                    <h2 style={{marginTop: '0'}}>Choose a Variant:</h2>
                    <ul>
                        {variants.map((item, index) => (
                            <button key={index}
                                    onClick={() => handleVariantClick(item.variant, item.background, item.image)}>
                                <strong>{item.variantName}</strong>
                            </button>
                        ))}
                    </ul>
                </div>
                {selectedVariant ? (
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
                                    </div>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/${selectedVariantBackground}`}
                                         style={{width: '150px', height: '150px'}}
                                         alt="Selected Variant"/>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <button>select</button>
                        </div>
                    </div>) : null}
            </div>
            <div className="star-wars-body">
                <div className="story-container">
                    <div className="crawl-container">
                        <p className='story'>
                            May the Force be with you, young Jedi, as you traverse the boundless expanse of the galaxy,
                            where the celestial bodies bear witness to an eternal conflict between the forces of light
                            and the shadows of the dark side. Amidst the cosmic ballet of stars, your destiny unfolds as
                            Luke Skywalker, a beacon of hope in the vastness of uncertainty. The weight of the Rebellion
                            and the collective aspirations of countless beings converge upon your shoulders, and in this
                            pivotal moment, meticulous preparation becomes not only advisable but an absolute
                            imperative. Let us delve deeper into the profound significance of each task on your
                            checklist, understanding how these seemingly mundane to-dos become the linchpins of survival
                            for the galaxy's last hope
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
};

export default HomePage;