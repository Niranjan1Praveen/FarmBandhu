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
        title: "बाजार रुझान विश्लेषण उपकरण",
        subTitle: "कल की कीमतें, आज देखें!",
        output: "₹ 2250 से ₹ 2500 एक बड़ी डील है",
        img: money,
        path: '/crop-price-analysis-tool',
        styles: {color: "#ffffff", backgroundImage: `url(${tool1Icon})`},
    },
    {
        id: 2,
        title: "फसल उपज योजना उपकरण",
        subTitle: "हर एकड़ के लिए सही फसल, हर बार।",
        output: "चावल हो सकता है चुनी हुई फसल",
        img: tree,
        path: '/crop-recommendation-tool',
        styles: {color: "#ffffff", backgroundImage: `url(${tool3Icon})`},
    },
    {
        id: 3,
        title: "जलवायु फसल योजना उपकरण",
        subTitle: "इष्टतम कटाई विश्लेषण",
        img: language,
        newTab: true,
        path: '/',
        pathNewTab: "http://127.0.0.1:5000",
        styles: {backgroundImage: `url(${tool2Icon})`},
    },
    {
        id: 4,
        title: "पौध रोग भविष्यवाणी उपकरण",
        subTitle: "ऑब्जेक्ट डिटेक्शन का उपयोग करके आपके पौधों में रोगों का पता लगाएं",
        output: "रोगों को ट्रैक करने के लिए योलो मॉडल",
        img: language,
        path: '/',
        comingSoon: true,
        styles: {backgroundImage: `url(${tool4Icon})`},
    },
]
