from flask import Flask, request, jsonify
from joblib import load
from flask_cors import CORS

model = load("model/iris.joblib")

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
  data = request.json
  prediction = model.predict([[
    data['sepal_length'],
    data['sepal_width'],
    data['petal_length'],
    data['petal_width']
  ]])
  flower_type = prediction[0]
  return jsonify({'flower_type':flower_type})

if __name__ == '__main__':
  app.run()

