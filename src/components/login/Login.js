import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    const [selectedVariant, setSelectedVariant] = useState('');
    const [selectedVariantName, setSelectedVariantName] = useState('');
    const [selectedVariantDetails, setSelectedVariantDetails] = useState({});
    const [selectedVariantBackground, setSelectedVariantBackground] = useState('');
    const [selectedVariantImage, setSelectedVariantImage] = useState('');

    const handleVariantClick = async (variant, image, background) => {
        setSelectedVariant(variant);
        const response = await axios.get(`https://swapi.dev/api/${variant}`);
        const data = response.data;
        let info = {
            name: data.name,
            height: data.height,
            mass: data.mass,
        };
        setSelectedVariantDetails(info);
        setSelectedVariantName(info.name);
        setSelectedVariantBackground(background);
        setSelectedVariantImage(image)
    };

    const variants = [
        { variant: 'people/1/', variantName: 'Sky walker', background: 'lukeSkyWalkerBackground.jpg', image: 'skywalker.png' },
        { variant: 'people/10/', variantName: 'Obi-Wan', background: 'C3POBackground.jpg',image: 'ObiWan.png' },
        { variant: 'people/3/', variantName: 'R2-D2', background: 'R2D2Background.png',image: 'r2d2.gif' },
        { variant: 'people/4/', variantName: 'Darth Vader', background: 'darthVaderBackground.png',image: 'darthvader.gif' },
    ];

    return {
        selectedVariant,
        selectedVariantName,
        selectedVariantDetails,
        selectedVariantBackground,
        selectedVariantImage,
        handleVariantClick,
        variants,
    };
};

export default Login;