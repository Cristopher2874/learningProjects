export default function LatestNews(){
    return (
        <div className="latest_news">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>
              Read Our <span className="green">Latest News</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <div id="new" className="news_box">
            <div className="news_img">
              <figure>
                <img src="images/blog1.jpg" alt="#" />
              </figure>
            </div>
            <div className="news_room">
              <span>Post By :limelight</span>
              <ul>
                <li>
                  <a href="Javascript:void(0)">
                    Like <i className="fa fa-heart-o" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    Comment{" "}
                    <i className="fa fa-comments-o" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    Share <i className="fa fa-share-alt" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <h3>Interior Design</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div id="new" className="news_box">
            <div className="news_img mr_le">
              <figure>
                <img src="images/blog1.jpg" alt="#" />
              </figure>
            </div>
            <div className="news_room">
              <span>Post By :limelight</span>
              <ul>
                <li>
                  <a href="Javascript:void(0)">
                    Like <i className="fa fa-heart-o" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    Comment{" "}
                    <i className="fa fa-comments-o" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="Javascript:void(0)">
                    Share <i className="fa fa-share-alt" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <h3>Artictecture</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <a className="read_more" href="Javascript:void(0)">
            {" "}
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
    );
}