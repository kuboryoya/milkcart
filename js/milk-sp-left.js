
$(function () {

  var milkcocoa = new MilkCocoa('guitarj1qgeomw.mlkcca.com');
  var datastore = milkcocoa.dataStore('sample000data');

  
  // (4) 加速度センサの値をPCサイト側に送信
  $('#Abtn').on('click', function(e) {
    datastore.send({
      a: 'on',
      b: 'off'
    });
  });

});