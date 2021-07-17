import numpy as np
import base64
import cv2
from tensorflow.keras.models import model_from_json


def process_input(img_b64encode):
    ## conver the image from base64 to (28,28,1) image
    img_b64decode = base64.b64decode(img_b64encode) 
    img_array = np.frombuffer(img_b64decode,np.uint8) 
    img=cv2.imdecode(img_array,cv2.IMREAD_REDUCED_GRAYSCALE_2)
    img = cv2.resize(img,(28,28))
    img = np.array(img).reshape(28,28,1)
    img = img / 255
    img_array = np.array([img])
    
    ## load the cnn model
    json_file = open('models/cnn_model/cnn_model.json','r')
    loaded_cnn_model_json = json_file.read()
    json_file.close()
    cnn_model = model_from_json(loaded_cnn_model_json)
    
    #load weights into new model
    cnn_model.load_weights("models/cnn_model/cnn_model_weights.h5")

	#compile and evaluate loaded model
    cnn_model.compile(loss='categorical_crossentropy',optimizer='adam',metrics=['accuracy'])


    #predict output
    predictions_arr = cnn_model.predict(img_array)[0]



    return ({"predictions" : str(predictions_arr)});

  