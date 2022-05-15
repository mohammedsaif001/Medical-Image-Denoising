const StepsContent = [
    {
        slNo: '1',
        heading: 'Importing Required Libraries',
        description: 'Before we begin, we require the following libraries and dependencies, which needs to be imported into our Python environment such as NumPy, TensorFlow, OS, Python, Pil, Brainweb, Tqdm, Logging, Matplotlib, OpenCv2, Math, Skimage and random.'
    },
    {
        slNo: '2',
        heading: 'Collecting the Dataset',
        description: 'During this step, we fetch our MRI datasets (around 7200 images) from Brainweb, which are in grayscale and proceed with importing images and exporting images to tiff format.'
    },
    {
        slNo: '3',
        heading: 'Dividing Dataset',
        description: 'The collected MRI datasets are segregated into datasets of Original Image, Noisy Image & Denoised Image for the purpose of Training and Testing in the upcoming steps.'
    },
    {
        slNo: '4',
        heading: 'Resizing the Image',
        description: 'During this step, the MRI datasets are converted to NumPy form (array) and resized to 400, 400 pixels to uniformly size and shape the images. This step is considered one of the important steps to be followed and to improve the accuracy of the model during the training phase.'
    },
    {
        slNo: '5',
        heading: 'Adding Noise to Dataset',
        description: 'Noise in the range of standard deviation 0-45 is added to the images which are resized (400, 400 pixels). The noise is based on the Rician noise formula as MRI images are mostly predominant with Rician noise.'
    },
    {
        slNo: '6',
        heading: 'Creating CNN model',
        description: 'A CNN model is created with the help of encoders and decoders. Using Maxpooling 2D and Convo 2D layer concepts, we create Autoencoders and Decoders. Where in the model, Relu and Sigmoid are implemented as activation functions. And also, Adam is used as an optimizer for autoencoders.'
    },
    {
        slNo: '7',
        heading: 'Training the Model',
        description: 'Using the MRI datasets collected from Brainweb which were segregated into datasets of Original image, Noisy image & Denoised image is used for training the created CNN model.'
    },
    {
        slNo: '8',
        heading: 'Testing the Model',
        description: 'The model is tested by using testing dataset which was collected during segregation of datasets. Extensive Empirical study is performed to test and validate the data.'
    },
    {
        slNo: '9',
        heading: 'Modifying Model to Increase Accuracy',
        description: 'Once the model is validated for undesired value of PSNR we procced with modifying the model to improve the accuracy rate using Extensive Empirical study and proceed with training and testing the model again till we obtain desired results.'
    },
    {
        slNo: '10',
        heading: 'Getting the Desired output',
        description: 'The last step includes capturing the desired output value of PSNR, which is sufficient to denoise an image and excels over other existing models and proceed building an application to denoise medical images.This step also includes converting the NumPy images into tiff image format and we try to save it to the application.'
    },
]

export default StepsContent