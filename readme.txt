
# readme file

Heroku Deployed Link : https://ayushjain-forms.herokuapp.com

*** How to Setup! ***

Kindly install Python3 and NodeJS in your system before proceeding any further!

################################################################################################

**For linux or mac users :

git clone https://github.com/ayushjaink8/forms.git             # to clone the git repository

cd forms                                                       # enter into the project

python3 -m pip install --user --upgrade pip                    # make sure your pip is up-to-date
python3 -m pip install --user virtualenv                        # install virtual environment
python3 -m venv venv                                          # Creating the virtual environment
. venv/bin/activate                                          # Activate the virtual environment
[ (venv) will appear in front of your directory ]

##  Run the following commands after activating the virtual environment in order

pip install -r requirements.txt                                 # Install the requirements

npm i                             # to install all the dependencies present in package.json


python3 manage.py migrate                         # kindly, run this command twice if u get any warning!

npm run dev
python manage.py runserver                                      # To run the development server

################################################################################################

**For Windows users:

git clone https://github.com/ayushjaink8/forms.git             # to clone git repository

cd forms                                                       # enter into the project

python -m pip install --upgrade pip                              # make sure your pip is up-to-date
python -m pip install --user virtualenv                          # install virtual environment
python -m venv venv                                          # Creating the virtual environment
cd venv/Scripts && activate                                  # Activate the virtual environment
[ (venv) will appear in front of your directory ]

cd ../../                                                       # to change directory back to forms



##  Run the following commands after activating the virtual environment in order

pip install -r requirements.txt                                 # Install the requirements

npm i                             # to install all the dependencies present in package.json


python manage.py migrate                                     # kindly, run this command twice if u get any warning!

npm run dev
python manage.py runserver                                      # To run the development server

################################################################################################




###  dependencies:

backend - >   (command: pip install -r requirements.txt)
django
djangorestframework
django-rest-knox
django-cors-headers
pytz
gunicorn
whitenoise
psycopg2      # data and tables transfer among sqlite3 and postgres

frontend React(npm) - >  (Eg command: npm i -D webpack-cli)
webpack
webpack-cli
@babel/core
babel-loader
@babel/preset-env
@babel/preset-react
babel-plugin-transform-class-properties

# install react too..
npm i react react-dom prop-types

# install css loader for react webpack..
npm install css-loader --save-dev

# include react redux package to bind react with django app..
npm i redux react-redux
npm i redux-thunk                          # a middleware used to make asynchronous requests from our actions
npm i redux-devtools-extension

# install axios for data transfer between django and react
npm i axios

