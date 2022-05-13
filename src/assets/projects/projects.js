import expenseKeeper from '../projects-screenshots/expense-keeper.png';
import worldCountriesImg from '../projects-screenshots/countries-world.png';
import crwnClothes from '../projects-screenshots/crwn-clothes.png';
import threePizzaGuyzz from '../projects-screenshots/Three-Pizza-Guyzz.jpg';
import travellersHub from '../projects-screenshots/travellers-hub-home-page.png';
import forWheels from '../projects-screenshots/for-wheels.png';

const projects = [
  {
    name: 'For Wheels',
    description:
      'An app for a luxury renting cars agency: For Wheels! This SPA takes the information from the back-end API developed by us and, accordingly to the user interaction, consumes it and renders the data on the UI.',
    projectImg: forWheels,
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'git',
      'Tailwind',
      'Terminal',
      'Linters',
      'Fetch API',
    ],
    liveVersion: 'https://for-wheels.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/for_wheels',
  },
  {
    name: 'Crwn Clothing',
    description:
      'CRWN Clothing is a SPA of an online store cloths app. The app is using Firebase for authentication and for database.',
    projectImg: crwnClothes,
    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Styled-Components',
      'GitHub',
      'Terminal',
    ],
    liveVersion: 'https://react-app-crwn-clothing.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/crwn-clothing',
  },
  {
    name: "Space Travellers' Hub",
    description:
      'This application works with real live data from the SpaceX API. It was built for a company that provides commercial and scientific space travel services. It allows users to book rockets and join selected space missions. The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.',
    projectImg: travellersHub,
    technologies: [
      'JavaScript',
      'React',
      'React-thunk',
      'Redux',
      'CSS',
      'GitHub',
      'Jest-test',
      'GitFlow',
    ],
    liveVersion: 'https://space-travellers-hub-react-redux.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/space-travellers-hub',
  },
  {
    name: 'Three Pizza Guyzz',
    description:
      'This website comprises a pizza restaurant menu of Three Pizza Guyzz Restaurant. Inspired by the best pizza recipes from the internet and by not claiming the recipes as their one, they share them with the users, to give them the possibility to bake their pizza at home. If internet users want to become customers, they can reserve a particular pizza for a few days, and the restaurant takes the responsibility that after the moment the customer arrives at the spot, the pizza will be ready in a maximum of 15 minutes.',
    projectImg: threePizzaGuyzz,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Webpack',
      'Jest-test',
      'GitFlow',
      'Terminal',
    ],
    liveVersion: 'https://three-pizza-guyzz.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/Three-Pizza-Guyzz-JS-Capstone',
  },
  {
    name: 'Expense Keeper',
    description:
      'ExpenseKeeper is an app built with Ruby on Rails using the MVC architecture. The app allows users to track their expenses while grouping them into categories.',
    projectImg: expenseKeeper,
    technologies: [
      'CSS',
      'Ruby',
      'Ruby on Rails',
      'PostgreSQL',
      'Gitflow',
      'GitHub',
      'Terminal',
    ],
    liveVersion: 'https://expensekeeper-nicu.herokuapp.com/',
    gitHubRepo: 'https://github.com/nicupop729/expense-keeper',
  },
  {
    name: 'World Countries',
    description:
      'Fetching data from REST COUNTRIES API, this app (mobile version for now) gives informations like area, population, capital, and borders for 195 countries from seven continents.',
    projectImg: worldCountriesImg,
    technologies: [
      'JavaScript',
      'React',
      'React-thunk',
      'Redux',
      'CSS',
      'GitHub',
      'Jest-test',
      'GitFlow',
    ],
    liveVersion: 'https://world-countries-react-redux.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/world-countries--react-capstone',
  },
];

export default projects;
