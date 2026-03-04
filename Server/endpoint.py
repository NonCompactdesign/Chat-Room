from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

ROOMS = {}

@app.route("/get_room_id", methods=["GET"])
def get_room_id():
    # the frontend will request for a unique room id for the new room and the backend will give a unique room id to the frontend and the frontend will use that room id to create a new room

    room_id = str(len(ROOMS) + 1)

    return jsonify({
        "status": "Y",
        "room_id": room_id
    })

@app.route("/room_information", methods=["POST"])
def store_room_information():
    # the information of the room will stored in the database
    # for now the information will be store here in the memory

    data = request.get_json()

    room_information = json.loads(data)

    ROOMS[room_information["room_id"]] = room_information
