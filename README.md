# Image Denoising

Image denoising is an important pre-processing step in medical image analysis. The basic intent of image denoising is to reconstruct the original image from its noisy observation as accurately as possible while preserving important details such as edges and textures in the denoised image.

### Previous Models

Different algorithms have been proposed in the past three decades with varying denoising performances. The sources of noise present significant problems for image denoising. Gaussian, impulse, salt, pepper, and speckle noise in particular are complex sources of noise in imaging. In the task of image denoising, the convolutional neural network methodology has gained a lot of attention in recent years. Several CNN approaches for image denoising have been proposed so far. These models work well only for certain types of noise models and specific datasets.

## About our Model

Here we present a CNN-based algorithm with the help of encoders and decoders to estimate the original image by suppressing noise from a noise-contaminated version of the image and by applying our efficient algorithm to denoise the image with the highest SSIM and PSNR values with low processing time. We fetch our MRI datasets (around 7200 images) from Brainweb. The collected MRI datasets are segregated into datasets of original image, noisy image, and denoised image for the purpose of training and testing. Our CNN model is created with the help of encoders and decoders. The concept of maxpooling2D and convo2D layers is implied to create autoencoders and decoders. Where in the model, Relu and Sigmoid are implemented as activation functions and Adam is used as an optimizer for autoencoders. Finally, we capture the desired output value of PSNR, which is sufficient to denoise an image and excels over other existing models, and proceed to build an application to denoise medical images.
