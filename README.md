# Dermalens

This repository contains the source code and resources for a web application designed to aid in the early detection of melanoma, the most lethal form of skin cancer. Utilizing TensorFlow and Python, this project aims to deliver a user-friendly experience while maintaining high accuracy in identifying potential melanomas.

## Features

### User-Friendly Interface
The application features an intuitive interface that allows users to easily upload images of their skin lesions. The upload process is straightforward, ensuring users can quickly get their images analyzed without unnecessary steps or complexity.

### Advanced Machine Learning Model
Powered by TensorFlow, the application employs a robust machine learning model trained on an extensive dataset of skin cancer images. This model analyzes the uploaded images, comparing them to its training data to detect signs of melanoma. Leveraging cutting-edge technology, the application aims for high accuracy in its detection capabilities.

### Impact on Early Detection
By making this technology accessible to individuals, the application promotes regular self-examinations and encourages timely consultations with healthcare professionals if any concerns are detected. Early detection can lead to better treatment outcomes and potentially save lives.

## Dataset: HAM10000

The model is trained on the HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. The dataset includes the following classes:

- **nv**: Melanocytic nevi (benign neoplasms of melanocytes) - 6705 images
- **mel**: Melanoma (malignant neoplasm derived from melanocytes) - 1113 images
- **bkl**: Benign keratosis-like lesions (including seborrheic keratoses, solar lentigo, and lichen-planus-like keratoses) - 1099 images
- **bcc**: Basal cell carcinoma (a common type of epithelial skin cancer) - 514 images
- **akiec**: Actinic keratoses and intraepithelial carcinoma (non-invasive squamous cell carcinoma variants) - 327 images
- **vasc**: Vascular lesions (such as cherry angiomas, angiokeratomas, pyogenic granulomas, and hemorrhages) - 142 images
- **df**: Dermatofibroma (benign skin lesions) - 115 images

## Model Architecture

The application utilizes MobileNet, a lightweight Convolutional Neural Network (CNN) architecture optimized for efficient use on mobile and embedded devices. The MobileNet model is adapted for the task of classifying skin lesions into seven different classes. The architecture includes:
- A base MobileNet model
- Additional layers for the specific task, including a dropout layer for regularization and a dense layer with softmax activation for multi-class classification

#To run the Dermalens web app, you can follow these steps:

Navigate to the templates folder in the project directory.
Open index.html file.
Run a local server to view the web app in your browser.

## Conclusion

This project aims to make a significant impact on the early detection of melanoma through the use of advanced machine learning techniques. By providing a tool that is both accurate and easy to use, it empowers individuals to take control of their skin health and seek medical advice when necessary.

## References

- Tschandl P, Rosendahl C, Kittler H. The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. Sci Data. 2018;5:180161. DOI: 10.1038/sdata.2018.161.
