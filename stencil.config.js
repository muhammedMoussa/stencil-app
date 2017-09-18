exports.config = {
  bundles: [
    { components: ['my-name'] },
    { components: ['my-first-component'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
