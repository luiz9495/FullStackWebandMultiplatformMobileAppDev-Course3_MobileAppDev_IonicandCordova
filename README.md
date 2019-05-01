# Multiplatform Mobile App Development with Web Technologies
 by The Hong Kong University of Science and Technology

 Mobile app development with Ionic framework course. Provided by Coursera.


### About
conFusion is an application which allow you to check information of your favourite restauran! Application give you possibility to check restaurant's menu, contact information and cheefs who are working for us. Moreover you have posibility to save or delete your favourite dishes in your personal favourite list.

### Features
* Simply REST API server with [json-server](https://github.com/typicode/json-server)
* Chosing profile picture during registration using build-in camera or android gallery
* Local notification, toast notification, vibration

### How to start
Using npm install all required modules:

    npm install gulp-cli -g
    npm install bower -g
    npm install cordova ionic -g
    npm install json-server -g


To start json-server go to /json-server directory and type:

    json-server --watch db.json

>Remember to set this option to *false* before deploying your application to real device, otherwise there will be no access to platform features like camera and galery.

### Server address configuration

	baseURL = "http://192.168.0.XXX:3000/"

### Run app
Start ionic server

	ionic serve --lab

### Used tools and technologies:
* HTML5
* JavaScript
* Ionic Framework
* Angular
* Json-server
* Cordova

## Course main issues: version (in)compatibilities
- use ionic v3 (not v4)
- use ionic cordoba v4 (not v5 or higher)
- android/sdk: max recommended version = v7.x (Nougat) (!!! experienced incompatibilities otherwise)
- android api: max recommended version = 25 (!!! experienced incompatibilities otherwise)

nb: otherwise many bugs or incompatibilities: local-notifications, camera, social-media,...
nb: "npm prune" very useful to avoid npm library inconsistancies

### launch the json server (option --host needed, to make sure terminal/server on same ipaddr when emulation, due to vpn?)
json-server --watch --host 192.168.1.2 db.json -d 2000

### launch the application on the emulated android terminal

	ionic cordova emulate android

### various ionic cordova command line 

	ionic cordova platform add android
	ionic cordova build android
	ionic cordova emulate android
	ionic cordova run android
