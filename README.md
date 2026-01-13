# Medical Image Denoising

Image denoising is an important pre-processing step in medical image analysis. The basic intent of image denoising is to reconstruct the original image from its noisy observation as accurately as possible while preserving important details such as edges and textures in the denoised image.

## Visit Our Website
To denoise your image please visit our website and upload your images.
https://github.com/abdullah7795/Medical-Image-Denoising

---

## Previous Models

Different algorithms have been proposed in the past three decades with varying denoising performances. The sources of noise present significant problems for image denoising. Gaussian, impulse, salt, pepper, and speckle noise in particular are complex sources of noise in imaging. In the task of image denoising, the convolutional neural network methodology has gained a lot of attention in recent years. Several CNN approaches for image denoising have been proposed so far. These models work well only for certain types of noise models and specific datasets.

## About Our Model

Here we present a CNN-based algorithm with the help of encoders and decoders to estimate the original image by suppressing noise from a noise-contaminated version of the image and by applying our efficient algorithm to denoise the image with the highest SSIM and PSNR values with low processing time. We fetch our MRI datasets (around 7200 images) from Brainweb. The collected MRI datasets are segregated into datasets of original image, noisy image, and denoised image for the purpose of training and testing. Our CNN model is created with the help of encoders and decoders. The concept of maxpooling2D and convo2D layers is implied to create autoencoders and decoders. Where in the model, Relu and Sigmoid are implemented as activation functions and Adam is used as an optimizer for autoencoders. Finally, we capture the desired output value of PSNR, which is sufficient to denoise an image and excels over other existing models, and proceed to build an application to denoise medical images.

**Frontend Repository:** https://github.com/abdullah7795/Medical-Image-Denoising

**CNN Model Repository (Where Model is Hosted):** https://github.com/abdullah7795/MRIDenoisingmodel

---

## Research Papers

### 1. Optimal Bilateral Filter and CNN Based Denoising Method (SEPT 2019)
**MEASUR 6587**
- Bioinspired optimization based filtering technique for the MI Denoising
- Swarm-based optimization (DF and MFF algorithm)
- CNN is used to classify the denoised image as normal or abnormal
- [Link](https://www.sciencedirect.com/science/article/abs/pii/S0263224119303902?via%3Dihub)

### 2. A Convolutional Neural Network for Denoising of MRI (JUL 2020)
**PATREC 7847**
- CNN-DMRI Model for reduction of Rician noise from MRI Images
- Multiple convolutions captures different image features while separating inherent noise
- Performs Down-sampling and Up-sampling through the Encoder-Decoder framework
- [Link](https://www.sciencedirect.com/science/article/abs/pii/S0167865520301203?via%3Dihub)

### 3. MRI Denoising Using Progressively Distribution-Based Neural Network (SEPT 2020)
**MRI 9412**
- Progressive learning strategy applied to MR Image Rician Denoising
- Fitting the distribution at pixel-level and feature-level were performed
- Nets was proposed for achieving a better performance
- [Link](https://www.sciencedirect.com/science/article/abs/pii/S0730725X19304643?via%3Dihub)

### 4. Blind Image Denoising and Inpainting Using Robust Hadamard Autoencoders (JAN 2021)
- Denoising and Image Inpainting - Robust Deep Autoencoders
- Oversee coherent corruptions - Random blocks of missing values in a dataset
- Imputing and making predictions on graph network data
- [Link](https://www.researchgate.net/publication/348802795_Blind_Image_Denoising_and_Inpainting_Using_Robust_Hadamard_Autoencoders)

### 5. Methods for Image Denoising Using CNN: A Review (JUN 2021)
- Survey of different techniques relating to CNN Image Denoising
- Focuses on CNN architectures
- Observed that the GAN was the most used method for CNN Image Denoising
- [Link](https://link.springer.com/article/10.1007/s40747-021-00428-4)

### 6. Wavelet Enabled Convolutional Autoencoder Based DNN for Hyperspectral Image Denoising (OCT 2021)
- Dual branch DL based denoising method - WaCAEN
- CNN, Autoencoder, skip connections and sub-pixel up sampling for better outcomes
- Demonstrates its effectiveness in restoration of spectral signature
- [Link](https://link.springer.com/article/10.1007/s11042-021-11689-z)

---

## Algorithm Details

Presenting a CNN-based algorithm with the help of encoders and decoders using ReLu, Sigmoid as activation function and Adam as an optimizer to find the optimum fit and to train the efficient model using Extensive Empirical Study using data sets from Brainweb. Estimating the original image by suppressing noise from a noise contaminated version of the image by applying our efficient algorithm to denoise the image with the highest SSIM and PSNR values with low processing time.

### Step 1: Importing Required Libraries
Before we begin, we require the following libraries and dependencies, which needs to be imported into our Python environment such as NumPy, TensorFlow, OS, Python, Pil, Brainweb, Tqdm, Logging, Matplotlib, OpenCv2, Math, Skimage and random.

### Step 2: Collecting the Dataset
During this step, we fetch our MRI datasets (around 7200 images) from Brainweb, which are in grayscale and proceed with importing images and exporting images to tiff format.

### Step 3: Dividing Dataset
The collected MRI datasets are segregated into datasets of Original Image, Noisy Image & Denoised Image for the purpose of Training and Testing in the upcoming steps.

### Step 4: Resizing the Image
During this step, the MRI datasets are converted to NumPy form (array) and resized to 400x400 pixels to uniformly size and shape the images. This step is considered one of the important steps to be followed and to improve the accuracy of the model during the training phase.

### Step 5: Adding Noise to Dataset
Noise in the range of standard deviation 0-45 is added to the images which are resized (400x400 pixels). The noise is based on the Rician noise formula as MRI images are mostly predominant with Rician noise.

### Step 6: Creating CNN Model
A CNN model is created with the help of encoders and decoders. Using Maxpooling 2D and Convo 2D layer concepts, we create Autoencoders and Decoders. Where in the model, Relu and Sigmoid are implemented as activation functions. And also, Adam is used as an optimizer for autoencoders.

### Step 7: Training the Model
Using the MRI datasets collected from Brainweb which were segregated into datasets of Original image, Noisy image & Denoised image is used for training the created CNN model.

### Step 8: Testing the Model
The model is tested by using testing dataset which was collected during segregation of datasets. Extensive Empirical study is performed to test and validate the data.

### Step 9: Modifying Model to Increase Accuracy
Once the model is validated for undesired value of PSNR we proceed with modifying the model to improve the accuracy rate using Extensive Empirical study and proceed with training and testing the model again till we obtain desired results.

### Step 10: Getting the Desired Output
The last step includes capturing the desired output value of PSNR, which is sufficient to denoise an image and excels over other existing models and proceed building an application to denoise medical images. This step also includes converting the NumPy images into tiff image format and we try to save it to the application.

---

## Accuracy Rate of Models

| # | Filter / Method | PSNR Value |
|---|-----------------|------------|
| 1 | Gaussian Filter | 18.08 |
| 2 | Denoise Bilateral | 18.22 |
| 3 | Denoise Wavelet | 22.43 |
| 4 | Shift Inv Wavelet | 22.46 |
| 5 | Img_Aniso_Filter | 18.36 |
| 6 | Denoise_Img_As_8byte | 22.63 |
| 7 | BM3D Denoise | 21.88 |
| 8 | Previous Model | 27.15 |
| 9 | **Current Model** | **28.79** |

---

## Tech Stack

### Backend / ML
- Python
- TensorFlow
- Keras
- NumPy
- Matplotlib
- Scikit-image
- OpenCV
- Flask (Backend API)

### Frontend
- React.js
- Bootstrap
- jQuery
- Semantic UI

### Tools & Platforms
- Kaggle
- AWS
- Brainweb (Dataset)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/abdullah7795/Medical-Image-Denoising.git

# Navigate to project directory
cd Medical-Image-Denoising

# Install dependencies
npm install

# Start the development server
npm start
```

---

## License

This project was developed by Presidency University students (Batch 2018-2022) for their Final Year Project.

**GitHub Repository:** https://github.com/abdullah7795/Medical-Image-Denoising
