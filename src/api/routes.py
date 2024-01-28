"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Logica para ver si el usuario existe en la DB
    if username != "test@example.com" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity={"username": username})
    return jsonify(access_token=access_token)


@api.route("/private", methods=["GET"])
@jwt_required() # Decorador no deja ver
def protected():
    # Access the identity of the current user with get_jwt_identity
    # En La documentación pone que tipo de autorización debemos usar, token en este caso
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
     
@api.route("/perfil", methods=["GET"])
@jwt_required()
def perfil():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    if current_user:
        print("El valor es verdadero")
    response_body = {}
    response_body["results"] = current_user
    response_body["message"] = "Mostramos perfil del usuario"
    return response_body, 200