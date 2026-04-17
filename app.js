//You then use JavaScript to instantiate InstantSearch and attach widgets to your HTML containers
//obtained from Algolia documentation

const search = instantsearch({
    indexName: 'products',
    searchClient: algoliasearch.algoliasearch('YourAppID', 'YourSearchOnlyAPIKey'),
});

search.addWidgets([
    searchBox({ container: '#searchbox' }),
    hits({ container: '#hits' }),
    pagination({ container: '#pagination' }),
]);

search.start();
