from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

   # Database setup
db = mysql.connector.connect(
       host="localhost",
       user="your_database_user",
       password="your_database_password",
       database="your_database_name"
   )

cursor = db.cursor()
cursor.execute('''
       CREATE TABLE IF NOT EXISTS users (
           id INT AUTO_INCREMENT PRIMARY KEY,
           username VARCHAR(255) NOT NULL,
           email VARCHAR(255) NOT NULL,
           password VARCHAR(255) NOT NULL
       )
   ''')
db.commit()

@app.route('/')
def index():
       return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def signup():
       if request.method == 'POST':
           username = request.form['username']
           email = request.form['email']
           password = request.form['password']

           # Insert data into the database
           cursor.execute('INSERT INTO users (username, email, password) VALUES (%s, %s, %s)', (username, email, password))
           db.commit()

           return 'User registered successfully.'

if __name__ == '__main__':
       app.run(debug=True)
   

