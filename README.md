#Lazada eLogistics Test

##Installation
Checkout this project by `git clone https://github.com/dothanhlam/lazada-elogistics-test.git`

Change into the project folter, then installing dependencies by running
`npm install`

For executing project, run `npm start`. This will start 2 node js instances, one for webpack dev server at port 3000 and the parsing api server at port 3001

To check the api parsing node js separately, run `npm run api`

The layout was completed with react-bootstrap, also 2 predefined product url to be rendered for testing purpose.

##Concerns
- Unit test has not been implemented, but the setting for implementing unit test is ready
- Parsing product information can be performed at client side, or we inspect the api
- Redux Saga also be integrated, if we want to handle side effect from client
- Parsing api was implemented as simple as possible
- The code contains some unused stuffs, since the origin boilerplate copied from internet