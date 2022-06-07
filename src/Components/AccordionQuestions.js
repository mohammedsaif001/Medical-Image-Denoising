import React, { Component } from "react";
import $ from "jquery";
export default class AccordionQuestions extends Component {
  componentDidMount = () => {
    $(".collapse.show").each(function () {
      $(this).prev(".card-header").addClass("highlight");
    });

    // Highlight open collapsed element
    $(".card-header .btn").on("click", function () {
      $(".card-header").not($(this).parents()).removeClass("highlight");
      $(this).parents(".card-header").toggleClass("highlight");
    });
  };
  render() {
    return (
      <div className="container-lg" id="faq">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-title">Frequently Asked Questions</h1>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="clearfix mb-0">
                    <a
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa fa-chevron-circle-down"></i> Is this
                      Algorithm Applicable only for Medical Images?
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Yes, This Algorithm is Applicable only for Medical Images.
                    The reason being, our Model is trained to Remove Ration
                    Noise Which is Present Mainly in MRI Images and hence our
                    Model is Limited only to Medical Images .{" "}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <a
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa fa-chevron-circle-down"></i> Why Can't I
                      Upload Regular Images to Denoise?
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    The Regular Images or Day-to-Day Images Contains Different
                    Noises namely Gaussian Noise, Salt &amp; Pepper Noise,
                    Speckle Noise, Poisson Noise, Impulse Noise and much more
                    but mostly not Ration noise. Whereas our Model is solely to
                    denoise Ration Noise which is more applicable to Medical
                    Images.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <a
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fa fa-chevron-circle-down"></i> Why am I
                      Unable to Upload Images in PNG/JPG/JPEG/SVG/GIF?
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Our Model is Developed Stricly to Denoise Medical Images
                    &amp; Since Most MRI Images Format is TIFF/TIF and Not
                    PNG/JPG/JPEG/SVG therefore our Model Doesn't Allow User to
                    Upload These Format Images so that it Doesn't Spoil the
                    Uploaded image.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <a
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="fa fa-chevron-circle-down"></i> Why this
                      Algorithm is Working only for Black &amp; White or
                      Grayscale images?{" "}
                    </a>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Since MRI Images are Captured in Grayscale Format and the
                    Hard Copy of the Image is in Black and White; It's More
                    Efficient to Output the Model in Grayscale Image Than RGB
                    Values.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
