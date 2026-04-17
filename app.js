//You then use JavaScript to instantiate InstantSearch and attach widgets to your HTML containers
//Obtained from Algolia documentation
//No imports needed, the HTML <script> tags already loaded these.

const search = instantsearch({
    indexName: 'products', // Make sure this matches your Algolia index name
    searchClient: algoliasearch.algoliasearch('RT02OWA6OB', 'ae971ab74a6ee53fd51aee3768f59de8'),
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Search for products...',
    }),

    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: (hit, { html }) => html`
        <div class="product-card">
          <h1>${hit.name}</h1>
          <p>${hit.brand}</p>
          <p>$${hit.price}</p>
        </div>
      `,
        },
    }),

    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
]);

search.start();
