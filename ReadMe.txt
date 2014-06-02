First of all thanks for the opportunity given !

1) How to run
	- Unzip the file
	- Locate /App/server.bat. This runs a node server.
	- Browse the app "http://localhost:8000/"
2) Framework/Lib used
	- AngularJs
	- Bootstrap
	- Kendo UI
	- Less
	- NodeJs - Just for hosting and serving .json files
3) Folder Structure
		
	+---app
	¦   +---css 			- Contains local(app.css and app.less) and thrid party css files
	¦   +---data 			- static .json files
	¦   +---fonts 
	¦   +---img 			- site images
	¦   +---js
	¦   ¦   +---controllers		- Angularjs controllers js files(companyTab and Main page)
	¦   ¦   ¦   +---directives	- Angularjs controller used in directives used for common purposed
	¦   ¦   +---directives		- Angularjs directives
	¦   ¦   +---services		- Angularjs services to fetch data from server
	¦   +---lib			- Contains thrid party js files 
	¦   ¦   +---angular
	¦   +---templates		- Contains .html partials
	¦       +---directives		- templates used in directives
	¦       +---tabs		- templates used for tabs
	+---config			- Had a plan to test the app
	+---logs
	+---scripts			- Nodejs web server
	

4) Tested the app in 
	Chrome - Pass
	Firefox - Pass
	IE 9 - IE 11 - Pass
	IE 8 - Pass
	IE 7 - Fail

5) Things went wrong
	- I should have tested the app simultaneously in older versions of IE. 	
	- Should have started to write the test scenarios from beginning. Later in dev process it feels too lazy 

