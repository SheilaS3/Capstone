from flask import Flask, render_template, url_for, redirect, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
import os 


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
ma = Marshmallow(app)


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)
    

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
        

class RegisterForm(FlaskForm):
    username = StringField(validators=[InputRequired(), Length(min=4, max=20)], render_kw={"placeholder": "Username"})

    password = PasswordField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"placeholder": "Password"})

    submit = SubmitField('Register')

    def validate_username(self, username):
        existing_user_username = User.query.filter_by(
            username=username.data).first()
        if existing_user_username:
            raise ValidationError(
                'That username already exists. Please choose a different one.')
            

class LoginForm(FlaskForm):
    username = StringField(validators=[InputRequired(), Length(min=4, max=20)], render_kw={"placeholder": "Username"})

    password = PasswordField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"placeholder": "Password"})

    submit = SubmitField('Login')
    

class ClientsSchema(ma.Schema):
    class Meta:
        fields = ("person_type", "name", "lastname", "id_number", "id_number_expiry_date", "country", "country_risk", "pep", "activity", "funds_origin", "contract_date", "assigned_risk")
        
        
client_schema = ClientsSchema()
clients_schema = ClientsSchema(many = True)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            if bcrypt.check_password_hash(user.password, form.password.data):
                login_user(user)
                return redirect(url_for('dashboard'))
    
    return render_template("login.html", form=form)


@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    return render_template('dashboard.html')


@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))


@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data)
        new_user = User(username=form.username.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login'))
    
    return render_template("register.html", form=form)


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


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)