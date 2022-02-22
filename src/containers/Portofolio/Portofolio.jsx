import React, { Component, Fragment } from 'react';

import NavbarPortofolio from '../../components/NavbarPortofolio/NavbarPortofolio';
import CardPortofolio from './CardPortofolio/CardPortofolio';
import './Portofolio.css'

class Portofolio extends Component {
    render() {
        return (
            <Fragment>
                <NavbarPortofolio />
                <div className='title-porto'>
                    <h1>Portofolio</h1>
                    <h1>Plissdatengnikahan</h1>
                    <p>Berikut adalah portofolio undangan yang telah dibuat manggunakan plissdatengnikahan</p>
                </div>
                <div className='container'>
                    <div className='row'>
                        <CardPortofolio />
                        <CardPortofolio />
                        <CardPortofolio />
                        <CardPortofolio />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Portofolio;