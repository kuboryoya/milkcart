
$(function () {

  var milkcocoa = new MilkCocoa('guitarj1qgeomw.mlkcca.com');
  var datastore = milkcocoa.dataStore('sample000data');

  


  $('#Bbtn').on('click', function(e) {
    datastore.send({
      a: 'off',
      b: 'on'
    });
  });

});