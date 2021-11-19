import React, {Component} from "react";
import Carousel from "../homeComponents/CarouselComponent";
import Card from "../homeComponents/CardComponent";
import ParticlesBg from 'particles-bg'
import "./Home.css";

class Home extends Component {
    render() 
    {
        return (
            <div>
                
                <Carousel/>
                <Card/>
            </div>
            );
    }
    //<p className="sub-title__signup">ExamPlus 💎</p>
}

export default Home;