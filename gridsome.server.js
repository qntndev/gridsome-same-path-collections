// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collectionA = addCollection({
      typeName: 'CollectionA',
    });

    collectionA.addNode({
      id: 1,
      slug: 'product-1-collection-a',
      title: 'Collection A - Product 1',
    });

    const collectionB = addCollection({
      typeName: 'CollectionB',
    });

    collectionB.addNode({
      id: 1,
      slug: 'product-1-collection-b',
      title: 'Collection B - Product 1',
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
