import language from '../assets/images/icons/language.svg'
import money from '../assets/images/icons/money.svg'
import tree from '../assets/images/icons/tree.svg'
import tool1Icon from '../assets/images/tools/1.png'
import tool2Icon from '../assets/images/tools/2.png'
import tool3Icon from '../assets/images/tools/3.png'
import tool4Icon from '../assets/images/tools/4.png'


export default [
    {
        id: 1,
        title: "Market Trend Analysis Tool",
        subTitle: "See tomorrow's prices, today!",
        output: "₹ 2250 to ₹ 2500 is a big deal",
        img: money,
        path: '/crop-price-analysis-tool',
        styles: {color: "#ffffff", backgroundImage: `url(${tool1Icon})`},
    },
    {
        id: 2,
        title: "Crop Yield Planner",
        subTitle: "The right crop for every acre, every time.",
        output: "Rice may be the chosen one",
        img: tree,
        path: '/crop-recommendation-tool',
        styles: {color: "#ffffff", backgroundImage: `url(${tool3Icon})`},
    },
    {
        id: 3,
        title: "Climate Harvest Planner",
        subTitle: "Optimal harvesting analysis",
        img: language,
        newTab: true,
        path: '/',
        pathNewTab: "http://127.0.0.1:5000",
        styles: {backgroundImage: `url(${tool2Icon})`},
    },
    {
        id: 4,
        title: "Plant Disease Prediction Tool",
        subTitle: "Reveal diseases in your plants using object detection",
        output: "Yolo model to track diseases",
        img: language,
        path: '/',
        comingSoon: true,
        styles: {backgroundImage: `url(${tool4Icon})`},
    },
    
]