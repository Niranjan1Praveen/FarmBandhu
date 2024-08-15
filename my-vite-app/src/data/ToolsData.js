import language from '../assets/images/icons/language.svg'
import money from '../assets/images/icons/money.svg'
import tree from '../assets/images/icons/tree.svg'
import chartLine from '../assets/images/icons/chart-line.svg'
import tool1Icon from '../assets/images/tools/1.png'
import tool2Icon from '../assets/images/tools/2.png'
import tool3Icon from '../assets/images/tools/3.png'
import tool4Icon from '../assets/images/tools/4.png'


export default [
    {
        id: 1,
        title: "Crop Price Analysis",
        subTitle: "See tomorrow's prices, today!",
        output: "₹ 2250 to ₹ 2500 is a big deal",
        img: money,
        features: ["Gread tool", "Good tool", "Nice Tool", "Calculates something"],
        path: '/crop-price-analysis-tool',
        styles: {color: "#ffffff", backgroundImage: `url(${tool1Icon})`},
    },
    {
        id: 2,
        title: "Crop Recommendation",
        subTitle: "The right crop for every acre, every time.",
        output: "Rice may be the chosen one",
        img: tree,
        features: ["Gread tool", "Good tool", "Nice Tool", "Calculates something"],
        path: '/crop-recommendation-tool',
        styles: {color: "#ffffff", backgroundImage: `url(${tool3Icon})`},

    },
    {
        id: 3,
        title: "Crop Yield Analysis",
        subTitle: "Reveal your farm’s potential with yield analysis.",
        output: "62% growth in yield from 1990 to 2019",
        features: ["Gread tool", "Good tool", "Nice Tool", "Calculates something"],
        img: chartLine,
        path: '/crop-yield-analysis-tool',
        styles: {backgroundImage: `url(${tool2Icon})`},

    },
    {
        id: 4,
        title: "Plant Disease Analysis",
        subTitle: "Reveal diseases in your plants.",
        output: "Disease analysis using images.",
        features: ["Gread tool", "Good tool", "Nice Tool", "Calculates something"],
        img: language,
        path: '/',
        comingSoon: true,
        styles: {backgroundImage: `url(${tool4Icon})`},
    },
]