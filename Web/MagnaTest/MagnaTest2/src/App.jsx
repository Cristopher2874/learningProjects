import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import Banner from './components/Banner'
import Header from './components/Header'
import About from './components/About'
import Tab from './components/Tab.jsx'
import Service from './components/Service'
import {SERVICE_TEMPLATE} from './data'
import {HEADER_CONTENT} from './data'

function App() {
  const [selectedHeader, setSelectedHeader] = useState("home");

  function handleClick(headerName){
    setSelectedHeader(headerName)
  }

  return (
    <>
    {/*<Loader/>*/}
    <Header/>
    <section id="window">
      <menu>
        <Tab onSelect={()=>handleClick("home")}>Home</Tab>
        <Tab onSelect={()=>handleClick("about")}>About</Tab>
        <Tab onSelect={()=>handleClick("services")}>Services</Tab>
        <Tab onSelect={()=>handleClick("contact")}>Contact Us</Tab>
      </menu>

      <About title={HEADER_CONTENT[selectedHeader].title}></About>

    </section>

    <section className="banner_main">
      <Banner/>
    </section>

    <section>
      <Service 
        title={SERVICE_TEMPLATE[0].title} 
        subTitle1={SERVICE_TEMPLATE[0].subTitle1} 
        subTitle2={SERVICE_TEMPLATE[0].subTitle2} 
        subTitle3={SERVICE_TEMPLATE[0].subTitle3} 
        subTitle4={SERVICE_TEMPLATE[0].subTitle4}
        src={SERVICE_TEMPLATE[0].src}
      />
      <Service 
        title={SERVICE_TEMPLATE[1].title} 
        subTitle1={SERVICE_TEMPLATE[1].subTitle1} 
        subTitle2={SERVICE_TEMPLATE[1].subTitle2} 
        subTitle3={SERVICE_TEMPLATE[1].subTitle3} 
        subTitle4={SERVICE_TEMPLATE[1].subTitle4}
        src={SERVICE_TEMPLATE[1].src}
      />
    </section>


  {/* gallery */}
  {/*<div id="gallery" className="gallery">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>
              Our <span className="green">gallery</span>
            </h2>
            <p>
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffer
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="gallery_text">
            <div className="galleryh3">
              <h3>Interior Design</h3>
              <p>
                of passages of Lorem <br />
                Ipsum available <br />
                , but the majority <br />
                have suffer
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_img">
            <figure>
              <img src="images/gallery1.jpg" alt="#" />
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_img">
            <figure>
              <img src="images/gallery2.jpg" alt="#" />
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_img">
            <figure>
              <img src="images/gallery3.jpg" alt="#" />
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_img">
            <figure>
              <img src="images/gallery4.jpg" alt="#" />
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_text">
            <div className="galleryh3">
              <h3>Interior Design</h3>
              <p>
                of passages of Lorem <br />
                Ipsum available <br />
                , but the majority <br />
                have suffer
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_text">
            <div className="galleryh3">
              <h3>Interior Design</h3>
              <p>
                of passages of Lorem <br />
                Ipsum available <br />
                , but the majority <br />
                have suffer
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_img">
            <figure>
              <img src="images/gallery5.jpg" alt="#" />
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery_img">
            <figure>
              <img src="images/gallery6.jpg" alt="#" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end gallery */}
  {/* design */}
  {/*<div className="design">
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
  {/* end design */}
  {/* latest news */}
  {/*<div className="latest_news">
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
  {/* end latest news */}
  {/* testimonial */}
  {/*<div id="testimonial" className="Testimonial">
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
  {/* end design */}
  {/*  contact */}
  {/*<div id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-12 ">
                <input
                  className="contactus"
                  placeholder="Name"
                  type="type"
                  name="Name"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Email"
                  type="type"
                  name="Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Phone Number"
                  type="type"
                  name="Phone Number"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="textarea"
                  placeholder="Message"
                  type="type"
                  message="Name"
                  defaultValue={"Message"}
                />
              </div>
              <div className="col-md-12">
                <button className="send_btn">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width={600}
                height={345}
                frameBorder={0}
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end contact */}
  {/*  footer */}
  <footer>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className=" col-md-3 col-sm-6">
            <ul className="social_icon">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <p className="variat pad_roght2">
              There are many variat ions of passages of L orem Ipsum available ,
              but the majority h ave suffered altera tion in some form, by
            </p>
          </div>
          <div className=" col-md-3 col-sm-6">
            <h3>LET US HELP YOU </h3>
            <p className="variat pad_roght2">
              There are many variat ions of passages of L orem Ipsum available ,
              but the majority h ave suffered altera tion in some form, by
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>INFORMATION</h3>
            <ul className="link_menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html"> About</a>
              </li>
              <li>
                <a href="service.html">Services</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="testimonial.html">Testimonial</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>OUR Design</h3>
            <p className="variat">
              There are many variat ions of passages of L orem Ipsum available ,
              but the majority h ave suffered altera tion in some form, by
            </p>
          </div>
          <div className="col-md-6 offset-md-6">
            <form id="hkh" className="bottom_form">
              <input
                className="enter"
                placeholder="Enter your email"
                type="text"
                name="Enter your email"
              />
              <button className="sub_btn">subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <p>
                © 2019 All Rights Reserved. Design by{" "}
                <a href="https://html.design/"> Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
  {/* Javascript files*/}
  {/* sidebar */}
</>
  )
}

export default App
