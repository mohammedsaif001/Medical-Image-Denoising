import React, { useRef } from "react";
import ImageSlider from "react-image-comparison-slider";
import "./ImageComparison.css";
import ImageSliderCustom from "./ImageSliderCustom";
import ModalNav from "./ModalNav";

function ImageComparison() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="container navBarMargin" id="working">
        <h1 className="mt-5 mb-5 page-title">Working of Algorithm</h1>
      </div>
      <div className="team pt-5">
        <div className="container3  container mt-3">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center">
              <div className="img-fluid imageSli">
                <h4 style={{ fontFamily: "Roboto,sans-serif" }}>
                  SLIDE TO COMPARE RESULT
                </h4>
                <ImageSliderCustom
                  firstImage="images/output.png"
                  secondImage="images/input.png"
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h4 className="mt-3 card-title text-center">
                Details About the Working
              </h4>
              <p className="mt-3 text-muted" style={{ padding: "0 5%" }}>
                Now let us see how the model is trained and its accuracy when
                compared to other methods. In order to find their accuracy, we
                have used PSNR values to compare. firstly, the model contains of
                ENCODER, DECODER and AUTOENCODER in ENCODER we used
                convolution2D layers with activation function relu and padding
                as same we have used 2 layers of this layer along with MAX
                pooling 2D with padding as same, and N number of hidden layers
                with activation relu in DECODING we used convolution2Dtranspose
                layers with activation relu and padding as same. in AUTOENCODER
                to compile we have used optimizer Adam and loss function as
                binary_crossentropy and the model has given promising results
                original PSRN value of noisy image: 22.21{" "}
              </p>

              <div className="text-center">
                <button
                  className="btn my-2 my-sm-0 mx-3 "
                  type="submit"
                  onClick={() => setModalShow(true)}
                  style={{ background: "black", color: "white" }}
                >
                  CLICK HERE TO UPLOAD YOUR IMAGE
                </button>
              </div>

              <ModalNav show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <div className="col-xl-3  col-lg-3 col-md-12 col-sm-12"></div>
            <div className="col-xl-6  col-lg-6 col-md-12 col-sm-12">
              <h4 className="mt-2 card-title text-center">
                Acccuracy Rate of Models
              </h4>
              <table className="table my-4">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Filter / Method</th>
                    <th scope="col">PSNR Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Gaussian Filter </td>
                    <td>18.08</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Denoise Bilateral </td>
                    <td> 18.22</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td> Denoise Wavelet </td> <td> 22.43</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Shift Inv Wavelet</td> <td> 22.46</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Img_Aniso_Filter</td> <td> 18.36</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Denoise_Img_As_8byte</td>
                    <td> 22.63</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td> BM3D Denoise </td>
                    <td> 21.88</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Previous Model </td>
                    <td> 27.15</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td> Present Model </td> <td> 28.79</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-xl-3  col-lg-3 col-md-12 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageComparison;
