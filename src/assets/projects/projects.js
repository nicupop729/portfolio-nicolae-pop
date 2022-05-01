import awesomeBooksImg from '../projects-screenshots/awesome-books.jpg';
import worldCountriesImg from '../projects-screenshots/countries-world.png';
import exhibitionProjectImg from '../projects-screenshots/exhibition-project.jpg';
import leaderboard from '../projects-screenshots/leaderboard.jpg';
import threePizzaGuyzz from '../projects-screenshots/Three-Pizza-Guyzz.jpg';
import travellersHub from '../projects-screenshots/travellers-hub-home-page.png';

const projects = [
  {
    name: 'Awesome Books',
    description:
      'A basic website built using HTML, CSS and JavaScript that allows users to add and remove awesome books to or from a list',
    projectImg: awesomeBooksImg,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Terminal',
      'Local Storage',
    ],
    liveVersion: 'https://codepantherr.github.io/Awesome-Books/',
    gitHubRepo: 'https://github.com/codepantherr/Awesome-Books',
  },
  {
    name: 'Leaderboard for Game Snake',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
    projectImg: leaderboard,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Webpack',
      'Terminal',
      'GitFlow',
      'API',
    ],
    liveVersion: 'https://leaderboard-snake-game.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/Leaderboard',
  },
  {
    name: 'Exhibition - Ancient Egypt',
    description:
      'This project is about an art Exhibition titled "Exhibition 2022 — London: Ancient Egypt" hold next year in London UK. The work was ordered by Global Exhibitions LTD UK.',
    projectImg: exhibitionProjectImg,
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Terminal'],
    liveVersion: 'https://nicupop729.github.io/Exhibition-Page/',
    gitHubRepo: 'https://github.com/nicupop729/Exhibition-Page',
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
