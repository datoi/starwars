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
        selectedVariantStory,
        storyRef,
        crawlContainerRef,
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
                    <ul>
                        {variants.map((item, index) => (
                            <button key={index}
                                    onClick={() => handleVariantClick(item.variant, item.background, item.image, item.story)}>
                                <strong>{item.variantName}</strong>
                            </button>
                        ))}
                    </ul>
                </div>
                {selectedVariant ? (
                    <div className="right-panel">
                        <div>
                            <div className='description'>
                                <div>
                                    <div>
                                        <p>Name: {selectedVariantDetails.name}</p>
                                        <p>Height: {selectedVariantDetails.height}</p>
                                        <p>Mass: {selectedVariantDetails.mass}</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/${selectedVariantBackground}`}
                                         alt="Selected Variant"/>
                                </div>
                            </div>
                        </div>
                        {/*<div style={{textAlign: 'center'}}>*/}
                        {/*    <button>select</button>*/}
                        {/*</div>*/}
                    </div>) : null}
            </div>

            <div className="star-wars-body">
                <div className="story-container">
                    <div ref={crawlContainerRef} className="crawl-container">
                        <p className='story' ref={storyRef}>
                            {selectedVariantStory}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
};

export default HomePage;