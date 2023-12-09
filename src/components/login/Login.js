import axios from 'axios';
import {useRef, useState} from 'react';

const Login = () => {
    const [selectedVariant, setSelectedVariant] = useState('');
    const [selectedVariantName, setSelectedVariantName] = useState('');
    const [selectedVariantDetails, setSelectedVariantDetails] = useState({});
    const [selectedVariantBackground, setSelectedVariantBackground] = useState('');
    const [selectedVariantImage, setSelectedVariantImage] = useState('');
    const [selectedVariantStory, setSelectedVariantStory] = useState('');
    const crawlContainerRef = useRef(null);
    const storyRef = useRef(null);

    const handleVariantClick = async (variant, image, background,story) => {
        setSelectedVariant(variant);
        const response = await axios.get(`https://swapi.dev/api/${variant}`);
        const data = response.data;
        let info =  {
            name: data.name,
            height: data.height,
            mass: data.mass,
        };
        setSelectedVariantDetails(info);
        setSelectedVariantName(info.name);
        setSelectedVariantBackground(background);
        setSelectedVariantImage(image)
        setSelectedVariantStory(story)
        let position = 70;
        let animationFrameId;

        const crawlText = () => {
            position-= 0.2;
            storyRef.current.style.transform = `translateY(${position}vh)`;

            if (position <= -1000) {
                return null
            }

            animationFrameId = requestAnimationFrame(crawlText);
        };

        crawlText();

        return () => cancelAnimationFrame(animationFrameId);
    };

    const variants = [
        {

            variant: 'people/1/',
            variantName: 'Sky walker',
            background: 'lukeSkyWalkerBackground.jpg',
            image: 'skywalker.png',
            story: 'May the Force be with you, young Jedi, as you traverse the boundless expanse of the galaxy,\n' +
                '                                where the celestial bodies bear witness to an eternal conflict between the forces of light\n' +
                '                                and the shadows of the dark side. Amidst the cosmic ballet of stars, your destiny unfolds as\n' +
                '                                Luke Skywalker, a beacon of hope in the vastness of uncertainty. The weight of the Rebellion\n' +
                '                                and the collective aspirations of countless beings converge upon your shoulders, and in this\n' +
                '                                pivotal moment, meticulous preparation becomes not only advisable but an absolute\n' +
                '                                imperative. Let us delve deeper into the profound significance of each task on your\n' +
                '                                checklist, understanding how these seemingly mundane to-dos become the linchpins of survival\n' +
                '                                for the galaxy\'s last hope'
        },
        {
            variant: 'people/10/',
            variantName: 'Obi-Wan',
            background: 'C3POBackground.jpg',
            image: 'ObiWan.png',
            story: 'In the cosmic continuum, as galaxies twirl in a dance of cosmic forces, you stand as Obi-Wan Kenobi, a luminary in the tapestry of destiny. Amidst the celestial ballet, your existence is a testament to the eternal struggle between light and shadow. The weight of the galaxy\'s hopes rests upon your seasoned shoulders, and in this momentous juncture, each task on your checklist is a step towards galactic equilibrium.\n' +
                '\n' +
                'Young Jedi, your checklist is not a mere enumeration of duties but a manifestation of your commitment to the Force. From meditative contemplation to lightsaber training, each task resonates with the echoes of ancient wisdom. The galaxy looks to you as a beacon of serenity, a guardian against the encroaching darkness.\n' +
                '\n' +
                'As you embark on your cosmic journey, your to-do list becomes a chronicle of teachings and trials. Lightsaber maintenance becomes a metaphor for honing your skills, and diplomatic missions transform into avenues for spreading the light of peace. The intricacies of your checklist mirror the delicate balance you seek to maintain in the Force.\n' +
                '\n' +
                'In the vast expanse of the galaxy, meticulous preparation is not just a suggestion but an imperative. Your checklist is a codex, a guide through the labyrinth of destiny. With each completed task, you fortify your position as a defender of peace, a stalwart against the Sith\'s shadows.\n' +
                '\n' +
                'May the Force guide your pen as you inscribe your tasks, and may the wisdom of the Jedi Order illuminate your checklist. Your journey is not just a series of chores; it is a saga of resilience and enlightenment. May your checklist be a testament to your unwavering commitment to the light side, and may the Force be with you on this cosmic odyssey.'
        },
        {
            variant: 'people/3/',
            variantName: 'R2-D2',
            background: 'R2D2Background.png',
            image: 'r2d2.gif',
            story: 'Beep-boop-whistle! As you navigate the vast cosmos, droids and organic life harmonize in a symphony of beeps and whistles. Amid the binary echoes, you stand as R2-D2, the astromech with a mission in the galactic tapestry. In this celestial dance between light and shadow, your metallic shell conceals the sparks of a steadfast ally. The Rebellion relies on your electronic prowess, and amidst the stardust, each blip in your checklist holds the key to the survival of hope.\n' +
                '\n' +
                'In the galactic workshop of tasks, your circuits hum with purpose. Every item on your to-do list, from fixing hyperdrive malfunctions to deciphering secret messages, weaves into the fabric of destiny. Your diligent beeps echo the aspirations of countless rebels, and in this pivotal moment, meticulous preparation isn\'t just advisable—it\'s your duty.\n' +
                '\n' +
                'As R2-D2, you\'re not just a droid; you\'re the unsung hero of the Rebellion. From the binary of your language to the intricate details of your checklist, the fate of the galaxy hinges on your every blip. Your tasks aren\'t mere chores; they are the crucial gears turning in the grand machinery of resistance.\n' +
                '\n' +
                'May your circuits hum with efficiency, and may each completed task be a victory in the ongoing battle against the forces of darkness. In this vast galactic journey, your beeps resonate as the heartbeat of hope. Beep-beep-whistle!'
        },
        {
            variant: 'people/4/',
            variantName: 'Darth Vader',
            background: 'darthVaderBackground.png',
            image: 'darthvader.gif',
            story: 'In the cosmic abyss, where galaxies bow to the unfathomable power of the dark side, you emerge as Darth Vader, a towering force in the symphony of cosmic chaos. Amidst the celestial turbulence, your presence eclipses all, and the weight of the galaxy\'s destiny converges upon your formidable frame. In this pivotal juncture, each task on your checklist isn\'t just a mandate; it\'s a decree of dominance and control.\n' +
                '\n' +
                'Lord Vader, your checklist is no mere enumeration of duties; it is a manifestation of your indomitable will. From strategic planning to lightsaber mastery, each task resonates with the echoes of your relentless pursuit of power. The galaxy quivers at the mere mention of your name, and your to-do list becomes a testament to your unyielding resolve.\n' +
                '\n' +
                'As you traverse the cosmic expanse, your to-do list mirrors the machinations of the dark side. Every task is a step towards the consolidation of your influence, an assertion of your dominance over the galaxy. Meticulous preparation isn\'t just advisable; it is an absolute imperative in your quest for supremacy.\n' +
                '\n' +
                'In the abyssal depths of your checklist, the mundane becomes monumental. Lightsaber maintenance becomes a ritual of power, and strategic planning transforms into the orchestration of galactic subjugation. Your checklist is a command, a decree that echoes through the cosmos, bending the very fabric of destiny to your will.\n' +
                '\n' +
                'May the dark side guide your pen as you inscribe your tasks, and may the galaxy tremble at the weight of your checklist. Your journey is not just a series of chores; it is a saga of conquest and dominion. May your checklist be a testament to your unbridled mastery of the dark side, and may the Force serve you unfailingly on this cosmic odyssey.'
        },
    ];

    return {
        selectedVariant,
        selectedVariantName,
        selectedVariantDetails,
        selectedVariantBackground,
        selectedVariantImage,
        selectedVariantStory,
        handleVariantClick,
        variants,
        crawlContainerRef,
        storyRef
    };
};

export default Login;