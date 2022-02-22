import React, { Component } from "react";
import './CardPortofolio.css';

class CardPortofolio extends Component {
    render() {
        return (
            <div className='col-md-4'>
                <div className='card'>
                    <img className='card-img-top portfolio-card__image' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card img cap" />
                    <div className='card-body'>
                        <h6 className="card-subtitle mb-2 portfolio-card__category portfolio-card__category__offices">Offices</h6>
                        <h4 className="card-title mb-2 portfolio-card__title">Britannia Tower</h4>
                        <p className="card-text portfolio-card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p><span className="portfolio-card__stage portfolio-card__stage__construction"><i className="fas fa-hammer portfolio-card__stage__icon"></i>Construction</span></p>
                        <a href="#learn" className="card-link portfolio-card__link">Learn More</a>
                        {/*<a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPortofolio;