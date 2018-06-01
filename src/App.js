import React, {Component} from 'react';
import Myname from './components/myname';
import Whatido from './components/whatido';
import Mywork from './components/mywork';
import {Fullpage, Slide, HorizontalSlider} from 'fullpage-react';
import './App.css';
import Contact from "./components/contact";

const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 0.5,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true
};

const horizontalSliderProps = {
    name: 'horizontalSlider1', // name is required
    infinite: true, // enable infinite scrolling
};

const horizontalSlides = [
    <Slide> Slide 2.1 </Slide>,
    <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
    <Slide> <Myname name={'Łukasz'}/> </Slide>,
    <Slide> <Whatido/> </Slide>,
    <Slide> <Mywork /></Slide>,
    <Slide> <Contact /></Slide>
];
fullPageOptions.slides = slides;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Fullpage {...fullPageOptions} />
            </div>
        );
    }
}

export default App;
