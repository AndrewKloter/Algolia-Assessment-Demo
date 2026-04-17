// Wait for the window to load to ensure scripts are ready
window.addEventListener('load', () => {
  const search = instantsearch({
    indexName: 'products', // CHECK THIS: Must match your Algolia Index name exactly
    searchClient: algoliasearch('YOUR_APP_ID', 'YOUR_SEARCH_ONLY_API_KEY'),
  });

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: (hit, { html }) => html`
          <div>
            <strong>${hit.name}</strong><br />
            ${hit.brand} - $${hit.price}
          </div>
        `,
      },
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
    }),
  ]);

  search.start();
});
