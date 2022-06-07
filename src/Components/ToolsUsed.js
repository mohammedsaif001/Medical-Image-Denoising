import React from "react";
import Slider from "react-slick";

function ToolsUsed() {
  var settings = {
    // dots: true,
    autoplaySpeed: 1850,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    centerPadding: "200px",
    accessibility: true,
    rows: "1",

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: true,
          lazyLoad: "ondemand",
          dots: true,
        },
      },
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          lazyLoad: "ondemand",
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          lazyLoad: "ondemand",
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          lazyLoad: "ondemand",
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          lazyLoad: "ondemand",
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="container mb-5 navBarMargin" id="tools">
      <h1 className="page-title">Tools / Libraries / Frameworks</h1>
      <div className="container">
        <Slider {...settings}>
          <img src="images/python.png" alt="Python logo" />
          <img src="images/tensorflow.png" alt="Tensorflow logo" />
          <img src="images/matplotlib.jpg" alt="Matplotlib logo" />
          <img src="images/scikit.jpg" alt="Scikit logo" />
          <img src="images/keras.jpg" alt="Keras logo" />
          <img src="images/kaggle.png" alt="Kaggle logo" />
          <img src="images/reactjs.png" alt="ReactJs logo" />
          <img src="images/bootstrap.png" alt="Boootsrap logo" />
          <img src="images/javascript2.jpg" alt="Javascript logo" />
          <img src="images/jquery.png" alt="Jquery logo" />
          <img src="images/aws.png" alt="AWS logo" />
          <img src="images/flask.png" alt="Flask logo" />
        </Slider>
      </div>
    </div>
  );
}

export default ToolsUsed;
