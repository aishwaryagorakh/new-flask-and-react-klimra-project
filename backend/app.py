from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# In-memory store for records
records = []

# POST endpoint to insert a record
@app.route('/record', methods=['POST'])
def add_record():
    data = request.get_json()
    if 'record' in data:
        record = data['record']
        records.append(record)  # Add the record to memory
        return jsonify({"message": "Record added successfully"}), 201
    return jsonify({"error": "Record not found in request"}), 400

# GET endpoint to fetch the last record
@app.route('/record', methods=['GET'])
def get_record():
    if records:
        return jsonify({"record": records[-1]})
    return jsonify({"message": "No records found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
