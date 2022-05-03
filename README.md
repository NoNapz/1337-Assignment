# 1337 - Code Assignment!

## Description

TODO

## Features and functional requirements.

1. Responsive Design
2. Support for colorblindness
3. Screen Reader Functionality
4. Use modern CSS throughout the application.
5. Sort by name and office
6. Filter by name and office
7. ****TODO**** (Unit Testing)

Responsive design with a mobile first approach made this application quick and easy to get going. 
Utializing CSS powerful Clamp tool to shrink essential elements when needed.
The employee cards is using a grid system.

Support for colorblindness was checked using a chrome extention called Colorblindly.
Colorblindly checks for the following:
   - Blue Cone Monochromacy
   - Achromatomaly-Monochromacy
   - Achromatopsia-Green-Weak
   - Deuteranomaly-Green-Blind
   - Deuteranopia-Red-Weak
   - Protanomaly-Red-Blind
   - Protanopia-Blue-Weak
   - Tritanomaly-Blue-Blind
   - Tritanopia
After checking all options on the site, everything was clear and easy to read, so I doubt there is any
major issues with it.

Websites performance, screenreading seem to be more than fine on this assignment!

![Alt text1](https://i.gyazo.com/1bf160ae4a72be035b7ff502f55269c6.png)

When it comes to sorting and filtering it was done by passing props between components.

To sort the employees in a list by office or name I used javascripts sort method.
    e.g:
	```JavaScript
	if(props.sortValue === 'name') {
	    newEmployees.sort((a,b) => a[props.sortValue] > b[props.sortValue] ? 1 : -1);
	}
	if(props.sortValue === 'office') {
	     newEmployees.sort((a,b) => a[props.sortValue] > b[props.sortValue] ? 1 : -1);
	}
	```   
 The filtering was done using the string include method based upon the text inputs.
    e.g:
	```JavaScript
	employeesSorted.filter(
	  f => f.name?.includes(props.textInput) || 
	  f.office?.includes(props.textInput)|| 
	  props.textInput === ''
	```
## Tools ->
	Visual Studio Code
	React 18.1.0
	Libraries: 
		- Axios
		- react-icons
		- react-paginate 
	Styling:
		- CSS Modules
    - Modern Techniques

## Installing ->
- npm install
- npm start
	> Running on Localhost
	> Remember to create an .env file and replace the following:
	>- REACT_APP_1337_API_KEY=*Your key here without the "api-key " part.
	>- REACT_APP_1337_API_ENDPOINT="The provided api endpoint"
