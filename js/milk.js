
  // milkcocoa設定
  var milkcocoa = new MilkCocoa('guitarj1qgeomw.mlkcca.com');
  var datastore = milkcocoa.dataStore('sample000data');
  
  var cartline = 2;
  var speed = 0;
  var speedAlpha = 0;
  var time = 0;
  var mater = 12000;

  // スマートフォンから送信された値を受け取る
  datastore.on('send', function(sent){
    if(sent.value.a == 'on' && cartline != 1){
      cartline --;
    }
    if(sent.value.b == 'on' && cartline != 3){
      cartline ++;
    }
  });
  
$(function () {

    /* canvas要素のノードオブジェクト */
    var canvas = document.getElementById('milkcart');

    /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
    if ( ! canvas || ! canvas.getContext ) {
      return false;
    }
    /* 2Dコンテキスト */
    var ctx = canvas.getContext('2d');


    /*  アニメーション設定  */
    var requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    var cancelAnimationFrame = window.cancelAnimationFrame ||
      window.mozcancelAnimationFrame ||
      window.webkitcancelAnimationFrame ||
      window.mscancelAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;


    // 画像準備
    var cart = new Image();
    cart.src = "image/my-cart.png";
    var oil = new Image();
    oil.src = "image/oil.png";

    var stage = [
      [2, 1],
      [1, 2],
      [3, 3],
      [1, 4],
      [2, 4],
      [3, 5],
      [1, 6],
      [1, 7],
      [3, 7],
      [3, 8],
      [2, 8],
      [1, 9],
      [2, 9],
      [3, 10],
      [2, 10],
      [2, 11],
      [1, 12],
      [3, 13],
      [1, 14],
      [2, 14],
      [3, 15],
      [1, 16],
      [1, 17],
      [3, 17],
      [3, 18],
      [2, 18],
      [1, 19],
      [2, 19],
      [3, 20],
      [2, 20]
    ];

    var w = $('#milkcart').width();
    var h = $('#milkcart').height();


    $(window).on('load', function(){
      loop();
    });


    function loop() {
      time ++;
      speed += 1 + speedAlpha;
      speedAlpha += 1 / 80;
      requestId = window.requestAnimationFrame(loop); //戻り値を取得

      //stage
      ctx.fillStyle = 'rgb(200,200,200)';
      ctx.beginPath();
      ctx.rect(0,0,w,h);
      ctx.fill();
      ctx.fillStyle = 'rgb(50,50,50)';
      ctx.beginPath();
      ctx.rect(0,0,50,h);
      ctx.fill();
      ctx.beginPath();
      ctx.rect(350,0,50,h);
      ctx.fill();
      ctx.beginPath();
      ctx.rect(150,0,5,h);
      ctx.fill();
      ctx.beginPath();
      ctx.rect(250,0,5,h);
      ctx.fill();
      
      for(var i = 0; i < stage.length; i++){
        ctx.drawImage(oil, stage[i][0] * 100-30 , - stage[i][1] * 500 + speed);
        //接触判定
        if(  - stage[i][1] * 500 + speed > 300
          && - stage[i][1] * 500 + speed < 360
          && stage[i][0] == cartline ){
          speedAlpha = 0;
        }
      }
      
      //終了
      if(speed > mater){
        time --;
        speed = mater;
        speedAlpha = 0;
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.font = "30px 'Times New Roman'";
        ctx.fillText("GOAL!!!",90,h/2,400);
      }

      ctx.fillStyle = 'rgb(255,255,255)';
      $('#time').text(time / 100, 10, 10);
      $('#mater').text(Math.floor(mater - speed));


      ctx.drawImage(cart, cartline * 100 - 20, 350);

    } /* end loop */


  });