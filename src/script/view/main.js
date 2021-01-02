import beef from '../data/data-beef';
// import chicken from '../data/data-chicken';

const main = () => {
    const btnBeef = document.querySelector('beef-tab');
    // const btnChicken = document.querySelector('beef-chicken');

    // btnBeef.clickEvent = beef;
    // btnChicken.clickEvent = chicken;
    const funcBeef = async () => {
        try {
            const resultBeef = await beef();
            renderResult(resultBeef);
            console.log('beef');
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        btnBeef.foods = results;
   };

    const fallbackResult = message => {
       btnBeef.renderError(message);
    };

    btnBeef.clickEvent = funcBeef;
};

export default main;