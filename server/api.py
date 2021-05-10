from flask import Flask,request
from flask_cors import CORS,cross_origin
from process_input import process_input
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*"})


@app.route('/api/input',methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])

def input():


    data = request.get_json()['input']
    data = json.loads(data)
    img_b64encode = str(data['imgB64Encode'])
    return process_input(img_b64encode)
  

if __name__ == "__main__" :
    app.run(debug=True)
