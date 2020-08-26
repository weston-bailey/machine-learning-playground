from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# app.config('settings.py')


import api.server
# import api.load_data