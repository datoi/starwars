import axios from 'axios';
import { useState } from 'react';

const Login = () => {
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
        { variant: 'people/1/', variantName: 'Skywalker', image: 'skywalker.png' },
        { variant: 'people/2/', variantName: 'C-3PO', image: 'C-3PO_EP3.webp' },
        { variant: 'people/3/', variantName: 'R2-D2', image: 'r2d2.gif' },
        { variant: 'people/4/', variantName: 'Darth Vader', image: 'darthvader.gif' },
    ];

    return {
        selectedVariant,
        selectedVariantName,
        selectedVariantDetails,
        selectedVariantImage,
        handleVariantClick,
        variants,
    };
};

export default Login;