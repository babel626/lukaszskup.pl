import React, {Component} from 'react';
import Myname from './components/myname';
import {ScrollSection, ScrollContainer} from 'react-onepage-scroll';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <ScrollContainer>
                <Myname name={'Łukasz'} />
                </ScrollContainer>

                <ScrollContainer>
                    <Profession  />
                </ScrollContainer>

                <ScrollContainer>
                    <Myname />
                </ScrollContainer>

                <ScrollContainer>
                    <Myname />
                </ScrollContainer>
            </div>
    );
    }
    }

    export default App;
