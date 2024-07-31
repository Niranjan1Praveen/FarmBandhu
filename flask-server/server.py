from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# cors = CORS(app, origin="*")
CORS(app)

@app.route('/submit', methods=['GET'])
def submit():
    if request.is_json:
        data = request.get_json()
        return jsonify({"message": "Data received!", "data": data}), 200
    else:
        return jsonify({"error": "Request must be JSON"}), 415

if(__name__ == "__main__"):
    app.run(debug=True, port = 5000)