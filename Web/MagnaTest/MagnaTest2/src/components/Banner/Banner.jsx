//import './Banner.css';

export default function Banner(){
    return(
    <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="container">
            <div className="carousel-caption relative">
                <div className="row">
                <div className="col-md-7 offset-md-5">
                    <div className="text-bg">
                    <h1>
                        {" "}
                        Design <br />
                        Of Furniture
                    </h1>
                    <span>
                        There are many variations of passages of Lorem Ipsum
                        available
                    </span>
                    <a className="read_more" href="Javascript:void(0)">
                        Read More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="container">
            <div className="carousel-caption relative">
                <div className="row">
                <div className="col-md-7 offset-md-5">
                    <div className="text-bg">
                    <h1>
                        {" "}
                        Design <br />
                        Of Furniture
                    </h1>
                    <span>
                        There are many variations of passages of Lorem Ipsum
                        available
                    </span>
                    <a className="read_more" href="Javascript:void(0)">
                        Read More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="container">
            <div className="carousel-caption relative">
                <div className="row">
                <div className="col-md-7 offset-md-5">
                    <div className="text-bg">
                    <h1>
                        Design <br />
                        Of Furniture
                    </h1>
                    <span>
                        There are many variations of passages of Lorem Ipsum
                        available
                    </span>
                    <a className="read_more" href="Javascript:void(0)">
                        Read More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
        >
        <i className="fa fa-angle-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
        </a>
        <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
        >
        <i className="fa fa-angle-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
        </a>
    </div>
    );
}