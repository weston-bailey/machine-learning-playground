from api import app
from api.load_data import load_data 

@app.route('/')
def index():
  data = load_data(10)
  print(data)
  return '<h1>Hello World!</h1>'

