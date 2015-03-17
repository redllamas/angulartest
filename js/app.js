(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [{
    name: 'Ruby',
    price: 10.95,
    description: 'better language than javascript??',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'what a lovely gem',
    canPurchase: true,
    soldOut: true
  }];
})();