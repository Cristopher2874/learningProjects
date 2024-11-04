export default function About(props){
    return(
        <div id="about" className="about">
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                <div className="titlepage">
                    <h2>
                    {props.title}
                    </h2>
                    <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humourThere are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some
                    form, by injected humour
                    </p>
                    <a className="read_more" href="Javascript:void(0)">
                    {" "}
                    Read More
                    </a>
                </div>
                </div>
                <div className="col-md-7">
                <div className="about_img">
                    <figure>
                    <img src="images/about.png" alt="#" />
                    </figure>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}