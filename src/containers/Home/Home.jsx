import React, { Component, Fragment } from "react";

import Navbar from "./Navbar/Navbar";
import Section from './Navbar/Section';
import dummyText from '../../DummyText.js'
import '../../style.css'

class Home extends Component {
    
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="App">
                    <Section
                        title="Fitur"
                        subtitle={dummyText}
                        dark={false}
                        id="section1"
                    />
                    <Section
                        title="Tema"
                        subtitle={dummyText}
                        dark={true}
                        id="section2"
                    />
                    <Section
                        title="Harga"
                        subtitle={dummyText}
                        dark={false}
                        id="section3"
                    />
                </div>
            </Fragment>
        )
    }
}

export default Home;