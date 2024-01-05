import React from 'react';
import './HomePage.css';
import SelectProfile from "./SelectProfile";

const HomePage = () => {
    let {
        setSelectedVariantName,
        selectedVariant,
        selectedVariantDetails,
        selectedVariantImage,
        selectedVariantStory,
        handleVariantClick,
        variants,
        crawlContainerRef,
        storyRef,
        bodyStyle,
        selectClick
    } = SelectProfile();


    return (
        <div style={bodyStyle} className='bigBox'>
            <div className="container">
                <div className="left-panel">
                    <ul>
                        {variants.map((item, index) => (
                            <button key={index}

                                    onClick={() => handleVariantClick(item.variant, item.background, item.image, item.story)}
                            >
                                <strong>{item.variantName}</strong>
                            </button>
                        ))}
                    </ul>
                </div>
                {selectedVariant ? (
                    <div className="right-panel">
                        <div className='description'>
                            <div>
                                <div>
                                    <p>Name: {setSelectedVariantName}</p>
                                    <p>Height: {selectedVariantDetails.height}</p>
                                    <p>Mass: {selectedVariantDetails.mass}</p>
                                </div>
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}/${selectedVariantImage}`}
                                     alt="Selected Variant"/>
                            </div>
                        </div>
                        <button onClick={selectClick}>Select
                        </button>
                    </div>) : null}
            </div>
            <div className="star-wars-body">
                <div className="story-container">
                    <div className="crawl-container" ref={crawlContainerRef}>
                        <p className='story' ref={storyRef}>
                            {selectedVariantStory}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default HomePage;