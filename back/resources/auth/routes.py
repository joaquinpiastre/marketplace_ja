from flask import jsonify, request, Blueprint



auth = Blueprint("auth" ,__name__, url_prefix= "/auth")

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')


    if email == 'test@example.com' and password == 'password':
        response = {'Mensaje': 'Inicio sesion correctamente'}
        return jsonify(response), 200
    else:
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401

@auth.route("/register", methods=["POST"])

def register():
    data = request.json["name"]
    email = request.json["email"]
    = request.json[""]
    