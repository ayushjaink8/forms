
# readme file

How to Setup!

Kindly install Python and NodeJS in your system before proceeding any further!

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

npm i -D webpack webpack-cli
npm i -D @babel/core babel-loader
npm i -D @babel/preset-env @babel/preset-react
npm i -D babel-plugin-transform-class-properties


npm i react react-dom prop-types
npm install css-loader --save-dev
npm i redux react-redux redux-thunk redux-devtools-extension

npm i axios


python3 manage.py makemigrations                  # kindly, run this command twice if u get any warning!
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

npm i -D webpack webpack-cli
npm i -D @babel/core babel-loader
npm i -D @babel/preset-env @babel/preset-react
npm i -D babel-plugin-transform-class-properties


npm i react react-dom prop-types
npm install css-loader --save-dev
npm i redux react-redux redux-thunk redux-devtools-extension

npm i axios


python manage.py makemigrations                              # kindly, run this command twice if u get any warning!
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

