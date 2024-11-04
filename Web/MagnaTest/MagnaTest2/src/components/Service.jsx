export default function Service(props){
    return(
        <div id="service" className="service">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>
{/*Our <span className="green">Services</span>*/}
                {props.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service_box">
                <i>
                  <img src={props.src} alt="#" />
                </i>
                <h3>{props.subTitle1}</h3>
                <p>
                  many variations of passages <br />
                  of Lorem Ipsum available,
                </p>
              </div>
            </div>
            <div className="col-md-4 offset-md-1 col-sm-6">
              <div className="service_box">
                <i>
                  <img src="images/service2.png" alt="#" />
                </i>
                <h3>{props.subTitle2}</h3>
                <p>
                  many variations of passages <br />
                  of Lorem Ipsum available,
                </p>
              </div>
            </div>
            <div className="col-md-4 offset-md-3 col-sm-6 mar_top">
              <div className="service_box">
                <i>
                  <img src="images/service3.png" alt="#" />
                </i>
                <h3>{props.subTitle3}</h3>
                <p>
                  many variations of passages <br />
                  of Lorem Ipsum available,
                </p>
              </div>
            </div>
            <div className="col-md-4 offset-md-1 col-sm-6 mar_top">
              <div className="service_box">
                <i>
                  <img src="images/service4.png" alt="#" />
                </i>
                <h3>{props.subTitle4}</h3>
                <p>
                  many variations of passages <br />
                  of Lorem Ipsum available,
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <a className="read_more" href="Javascript:void(0)">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}