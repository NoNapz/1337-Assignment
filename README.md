# 1337 - Code Assignment!

## Description ->

	For this assignment, I decided to use react. Reasons; It's popular on the market 
	and is a blast to work with. My results is basically a simple application for 
	fetching and displaying employees at 1337. They can be sorted by either name or office, 
	filtered via inputs by either name or office and by higly responsive using modern css techniques.
	
	So, looking on the provided mock-up. I decided to create a sketch of the folder
	structure and needed components.

	Folder-structure:
	> src
		>components
			>hooks
				-- Custom hook for fetching data (incase it gets expanded)
			>employees
				-- Contain all employee components here (e.g, List, Search, Card)
			>pages
				-- Container for employees should be here as a page, incase site would be expanded.
			>UI
				-- Contains, wrappers, cards etc.. for general styling and reusability
	.env --> store secrets :)
	variables.css --> used for css variables.

	Once the folder structure was completed, I decided to use css modules as my way of styling,
	reason being i like to keep CSS seperated so it becomes easy to use and perform changes.

	I tried to keep all my react components very small to make it easier for other developers to 
	grasp and understand it, alongside some small comments to help.

## Features and functional requirements ->

1. Responsive Design
2. Support for colorblindness
3. Screen Reader Functionality
4. Use modern CSS throughout the application.
5. Sort by name and office
6. Filter by name and office
7. Front-to-end testing

Responsive design with a mobile first approach, because of the importance of having sites be available to as many people as possible.

Support for colorblindness, as I d

Support for colorblindness was checked using a chrome extention called Colorblindly. 
Colorblindness is something I think needs to be adressed and looked upon in all projects.
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

Websites performance and screenreading seem to be more than fine on this assignment.

![Alt text1](https://i.gyazo.com/1bf160ae4a72be035b7ff502f55269c6.png)

When it comes to sorting and filtering it was done by passing props between components.

To sort the employees in a list by office or name I used javascripts sort method.

e.g:
	
	
	if(props.sortValue === 'name') {
	    newEmployees.sort((a,b) => a[props.sortValue] > b[props.sortValue] ? 1 : -1);
	}
	if(props.sortValue === 'office') {
	     newEmployees.sort((a,b) => a[props.sortValue] > b[props.sortValue] ? 1 : -1);
	}
	  
 The filtering was done using the string include method based upon the text inputs.
 
 e.g:
 
	
	employeesSorted.filter(
	  f => f.name?.includes(props.textInput) || 
	  f.office?.includes(props.textInput)|| 
	  props.textInput === '')
	
	
For testing a simulated user experience via cypress, I used it to search for employees bases on name and office in one of the tests.
Furthermore, another test was included to test the included pagination. (See "Installing" to try it out). I deem testing applications
to be of great importance, maybe not for applications the size of this assignment, but in larger projects.

## Tools ->
	Visual Studio Code
	React 18.1.0
	CSS3
	
	Libraries: 
		- Axios
		- react-icons
		- react-paginate 
	Styling:
		- CSS Modules
		- Modern Techniques
	Testing:
		- Cypress	

## Installing ->
- npm install
- npm start
	> Running on Localhost
	> Remember to create an .env file and replace the following:
	>- REACT_APP_1337_API_KEY=*Your key here without the "api-key " part.
	>- REACT_APP_1337_API_ENDPOINT="The provided api endpoint"

To test the application with cypress.
- npx cypress open
