import DataSource from './../data/data-source.js';
import './../component/search-bar.js';
import './../component/club-list.js';

const main = () => {
    const searchBar = document.querySelector('search-bar');
    const clubListElement = document.querySelector('club-list');

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchBar.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchBar.clickEvent = onButtonSearchClicked;
};

export default main;
