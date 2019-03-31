""" Server entrypoint. Commented portions show user authentication. """

from flask import Flask
from flask import request
from flask import render_template_string
from flask import jsonify

# from flask_jwt_simple import  JWTManager
# from flask_jwt_simple import jwt_required
# from flask_jwt_simple import create_jwt
# from flask_jwt_simple import get_jwt_identity

from webargs import fields
from webargs.flaskparser import use_kwargs

import request_handlers as rh
from utils import to_snake_dict, to_camel_dict


app = Flask(__name__)
# app.config['SECRET_KEY'] = 'my_secret'
# app.config['JWT_SECRET_KEY'] = 'my_secret'
# jwt = JWTManager(app)



@app.route('/')
def home():
    return render_template_string("<body><h1>Yo this is the Margin Server!!!</h1></body>")




# @app.route('/login', methods=['POST'])
# @use_kwargs({
#     'username':fields.Str(required=True),
#     'password': fields.Str(required=True)
#     })
# def login(username, password):
#     if User(username).login(password):
#         ret = {'jwt': create_jwt(identity=username)}
#         return jsonify(ret), 200
#     else:
#         return jsonify({"msg": "Bad username or password"}), 401
#
#
#
#
#
#
# @app.route('/sign-up', methods=['POST'])
# @use_kwargs(
#     {
#         'username':fields.Str(required=True),
#         'password': fields.Str(required=True),
#         'details': fields.Nested({
#             'email': fields.Str(required=True),
#             'firstname':fields.Str(required=True),
#             'lastname':fields.Str(required=True)
#         })
#     })
# def sign_up(username, password, details):
#     if User(username).signup(password,details):
#         return jsonify({'msg': 'Signup OK!'}), 200
#     else:
#         return jsonify({"msg": "Could not signup username"}), 401
#
#
#
#
#
# @app.route('/create-note')
# @jwt_required
# @use_kwargs(
#     {
#         'content':fields.Str(required=True)
#     })
# def create_note(href, content):
#     user = User(get_jwt_identity())
#     if Note(content).create(user):
#         return jsonify({'msg': 'Create page OK!'}), 200
#     else:
#         return render_template_string("<body><h1>Yo Thats wrong!!!</h1></body>")



if __name__ == '__main__':
    # print "password is: DeXPLORER"
    # http://www.akadia.com/services/ssh_test_certificate.html
    # passphrase: DeXPLORER
    context = ('./certs/server.crt', './certs/server.key')
    # app.run(host="localhost", port=5000, debug=True, threaded=False, ssl_context=context)
    app.run(host="0.0.0.0", port=5000, debug=True)#, ssl_context=context)
