import React, {Component} from 'react';
import './css/mywork.css';
import Block from './block';
class Mywork extends React.Component{
    render(){
        return <div className={'mywork'}>
            <h1>Here is some of my work.</h1>
            <div className={'row'}>
                <Block name={'jumpout.pl'} description={'Simple app made with angular 5 and StoryBlok'} image={'http://www.uxforthemasses.com/wp-content/uploads/2015/09/InVision-screenshot.jpg'} url={'https://jumpout.pl'} />
                <Block name={'jumpout.pl'} description={'Simple app made with angular 5 and StoryBlok'} image={'http://www.uxforthemasses.com/wp-content/uploads/2015/09/InVision-screenshot.jpg'} />
                <Block name={'jumpout.pl'} description={'Simple app made with angular 5 and StoryBlok'} image={'http://www.uxforthemasses.com/wp-content/uploads/2015/09/InVision-screenshot.jpg'} />
                <Block name={'jumpout.pl'} description={'Simple app made with angular 5 and StoryBlok'} image={'http://www.uxforthemasses.com/wp-content/uploads/2015/09/InVision-screenshot.jpg'} />
            </div>

        </div>
    }
}

export default Mywork;