export default function Design(){
    return (
        <div className="design">
    <div className="container-fluid">
      <div className="row d_flex">
        <div className="col-md-5">
          <div
            id="design"
            className="carousel slide banner_design"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li data-target="#design" data-slide-to={0} className="active" />
              <li data-target="#design" data-slide-to={1} />
              <li data-target="#design" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption relative">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text_de">
                          <div className="titlepage">
                            <h2>
                              New Ideas <span className="green">Design</span>
                            </h2>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but theThere are many variations of
                            passages of Lorem Ipsum available, but the
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
                      <div className="col-md-12">
                        <div className="text_de">
                          <div className="titlepage">
                            <h2>
                              New Ideas <span className="green">Design</span>
                            </h2>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but theThere are many variations of
                            passages of Lorem Ipsum available, but the
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
                      <div className="col-md-12">
                        <div className="text_de">
                          <div className="titlepage">
                            <h2>
                              New Ideas <span className="green">Design</span>
                            </h2>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but theThere are many variations of
                            passages of Lorem Ipsum available, but the
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
              href="#design"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#design"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-7 pad_roght0">
          <div className="design_img">
            <figure>
              <img src="images/desi.jpg" alt="#" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}