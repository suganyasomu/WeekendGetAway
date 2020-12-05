import React from"react";
import "./style.css";

function Header() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./Assets/header1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-content">
                        <h1> Weekend Getaway</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./Assets/header2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-content">
                        <h1> Weekend Getaway</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./Assets/header3.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-content">
                        <h1> Weekend Getaway</h1>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
}

export default Header;