from flask import Flask, render_template, send_from_directory
from flask import jsonify
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
@app.route("/")
def index():
    return "<CENTER><h1>Bienvenido</h1></CENTER>"

@app.route("/cotizacion/dolar", methods = ['GET'])
def getdolar():
    resultado = getmoneda("USD")
    monedas = resultado["result"]["conversion"]
    for moneda in monedas:
        if moneda["to"] == "ARS":
            return jsonify({"moneda":"Dolar","precio":str(moneda["rate"])})

@app.route("/cotizacion/euro", methods = ['GET'])
def geteuro():
    resultado = getmoneda("EUR")
    monedas = resultado["result"]["conversion"]
    for moneda in monedas:
        if moneda["to"] == "ARS":
            return jsonify({"moneda":"Euro","precio":str(moneda["rate"])})

@app.route("/cotizacion/real", methods = ['GET'])
def getreal():
    resultado = getmoneda("BRL")
    monedas = resultado["result"]["conversion"]
    for moneda in monedas:
        if moneda["to"] == "ARS":
            return jsonify({"moneda":"Real","precio":str(moneda["rate"])})

@app.route("/cotizacion/monedas", methods = ['GET'])
def monedas():
    resultado = getmoneda("ARS")
    monedas = resultado["result"]["conversion"]
    return jsonify(monedas)



def getmoneda(moneda):
    response = requests.get("https://api.cambio.today/v1/full/"+str(moneda)+"/json?key=4986|9G2EH503Asin8FWsjK5bhaxBukYNpSFT")
    print(response)
    return response.json()



if __name__ == '__main__':
    app.run(debug = True,port=1243)
