export default function Testimonial(){
    return(
        <div id="testimonial" className="Testimonial">
    <div className="container-fluid">
      <div className="row d_flex">
        <div className="col-md-8 pad_left0">
          <div
            id="testimon"
            className="carousel slide banner_testimonial"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#testimon"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#testimon" data-slide-to={1} />
              <li data-target="#testimon" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption relative">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="text_humai">
                          <i>
                            <img src="images/tett1.png" alt="#" />
                          </i>
                          <span>HumouThere</span>
                          <p>
                            T suffered alteration in some form, by injected
                            humouThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humou
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text_humai">
                          <i>
                            <img src="images/tett2.png" alt="#" />
                          </i>
                          <span>HumouThere</span>
                          <p>
                            T suffered alteration in some form, by injected
                            humouThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humou
                          </p>
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
                      <div className="col-md-6">
                        <div className="text_humai">
                          <i>
                            <img src="images/tett1.png" alt="#" />
                          </i>
                          <span>HumouThere</span>
                          <p>
                            T suffered alteration in some form, by injected
                            humouThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humou
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text_humai">
                          <i>
                            <img src="images/tett2.png" alt="#" />
                          </i>
                          <span>HumouThere</span>
                          <p>
                            T suffered alteration in some form, by injected
                            humouThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humou
                          </p>
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
                      <div className="col-md-6">
                        <div className="text_humai">
                          <i>
                            <img src="images/tett1.png" alt="#" />
                          </i>
                          <span>HumouThere</span>
                          <p>
                            T suffered alteration in some form, by injected
                            humouThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humou
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text_humai">
                          <i>
                            <img src="images/tett2.png" alt="#" />
                          </i>
                          <span>HumouThere</span>
                          <p>
                            T suffered alteration in some form, by injected
                            humouThere are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humou
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#testimon"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#testimon"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="titlepage">
            <h2>Testimonial</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}