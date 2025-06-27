import { motion } from "framer-motion";
import '../../assets/Css/HomeCarousel.css'
const images = [
    require('../../assets/Images/img (1).png'),
    require('../../assets/Images/img (2).png'),
    require('../../assets/Images/img (3).png'),
    require('../../assets/Images/img (4).png'),
    require('../../assets/Images/img (5).png'),
    require('../../assets/Images/img (6).png'),
    require('../../assets/Images/img (7).png'),
    require('../../assets/Images/img (8).png'),
    require('../../assets/Images/img (9).png'),
    require('../../assets/Images/img (10).png'),
    require('../../assets/Images/img (11).png'),
    require('../../assets/Images/img (12).png'),
];
const directions = [
    { x: -100, y: 0 },   // left
    { x: 100, y: 0 },    // right
    { x: 0, y: -100 },   // top
    { x: 0, y: 100 },    // bottom
    { x: -100, y: -100 }, // top-left
    { x: 100, y: -100 },  // top-right
    { x: -100, y: 100 },  // bottom-left
    { x: 100, y: 100 },   // bottom-right
    { x: -150, y: 0 },    // further left
    { x: 0, y: -150 },    // further top
    { x: 150, y: 0 },     // further right
    { x: 0, y: 150 },     // further bottom
];

function HomeCarousel() {
    return (
        <div>
            
        </div>
    );
}

export default HomeCarousel