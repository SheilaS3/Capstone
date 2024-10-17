from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
import os 


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
ma = Marshmallow(app)


class Clients(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    person_type = db.Column(db.String(20), unique = False)
    name = db.Column(db.String(80), unique = False)
    lastname = db.Column(db.String(80), unique = False)
    id_number = db.Column(db.Integer, unique = True)
    id_number_expiry_date = db.Column(db.String(20), unique = False)
    country = db.Column(db.String(50), unique = False)
    country_risk = db.Column(db.String(3), unique = False)
    pep = db.Column(db.String(3), unique = False)
    activity = db.Column(db.String(100), unique = False)
    funds_origin = db.Column(db.String(100), unique = False)
    contract_date = db.Column(db.String(20), unique = False)
    assigned_risk = db.Column(db.String(10), unique = False)
    
    
    def __init__(self, person_type, name, lastname, id_number, id_number_expiry_date, country, country_risk, pep, activity, funds_origin, contract_date, assigned_risk):
        self.person_type = person_type
        self.name = name
        self.lastname = lastname
        self.id_number = id_number
        self.id_number_expiry_date = id_number_expiry_date
        self.country = country
        self.country_risk = country_risk
        self.pep = pep
        self.activity = activity
        self.funds_origin = funds_origin
        self.contract_date = contract_date
        self.assigned_risk = assigned_risk
           

class ClientsSchema(ma.Schema):
    class Meta:
        fields = ("person_type", "name", "lastname", "id_number", "id_number_expiry_date", "country", "country_risk", "pep", "activity", "funds_origin", "contract_date", "assigned_risk")
        
        
client_schema = ClientsSchema()
clients_schema = ClientsSchema(many = True)


# Endpoint to create a new client
@app.route("/client", methods=["POST"])
def add_client():
    person_type = request.json["person_type"]
    name = request.json["name"]
    lastname = request.json["lastname"]
    id_number = request.json["id_number"]
    id_number_expiry_date = request.json["id_number_expiry_date"]
    country = request.json["country"]
    country_risk = request.json["country_risk"]
    pep = request.json["pep"]
    activity = request.json["activity"]
    funds_origin = request.json["funds_origin"]
    contract_date = request.json["contract_date"]
    assigned_risk = request.json["assigned_risk"]
    
    new_client = Clients(person_type, name, lastname, id_number, id_number_expiry_date, country, country_risk, pep, activity, funds_origin, contract_date, assigned_risk)
    
    db.session.add(new_client)
    db.session.commit()
    
    client = Clients.query.get(new_client.id)
    
    return client_schema.jsonify(client)


# Endpoint to query all clients
@app.route("/clients", methods=["GET"])
def get_clients():
    all_clients = Clients.query.all()
    result = clients_schema.dump(all_clients)
    return jsonify(result)


# Endpoint to query a single client
@app.route("/client/<id>", methods=["GET"])
def get_client(id):
    client = Clients.query.get(id)
    return client_schema.jsonify(client)


# Endpoint for updating a client
@app.route("/client/<id>", methods=["PUT"])
def update_client(id):
    client = Clients.query.get(id)
    person_type = request.json["person_type"]
    name = request.json["name"]
    lastname = request.json["lastname"]
    id_number = request.json["id_number"]
    id_number_expiry_date = request.json["id_number_expiry_date"]
    country = request.json["country"]
    country_risk = request.json["country_risk"]
    pep = request.json["pep"]
    activity = request.json["activity"]
    funds_origin = request.json["funds_origin"]
    contract_date = request.json["contract_date"]
    assigned_risk = request.json["assigned_risk"]
    
    client.person_type = person_type
    client.name = name
    client.lastname = lastname
    client.id_number = id_number
    client.id_number_expiry_date = id_number_expiry_date
    client.country = country
    client.country_risk = country_risk
    client.pep = pep
    client.activity = activity
    client.funds_origin = funds_origin
    client.contract_date = contract_date
    client.assigned_risk = assigned_risk
    
    db.session.commit()
    return client_schema.jsonify(client)


# Endpoint for deleting a client
@app.route("/client/<id>", methods=["DELETE"])
def delete_client(id):
    client = Clients.query.get(id)
    db.session.delete(client)
    db.session.commit()
    
    return "Client was successfully deleted"


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)