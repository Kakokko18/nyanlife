// JavaScript Document
sliderSet();
 
function sliderSet(){
 
  var $slider = $('.bl_sliderBlock');
 
  $slider.each(function(index){
 
    $slider.slick({
    slidesToShow: 1, //一度に表示するスライド枚数
    autoplay: true, //自動スライドするか(true or false)
    autoplaySpeed: 5000, //自動スライド速度(ミリ秒単位)
    pauseOnFocus: false, //スライドクリック時に停止するか(true or false)
    draggable: false,//ドラッグでスライダーを動かせるか(true or false)
    speed: 800,//ページ送りの速度(ミリ秒単位)
    centerMode: true,//表示中の画像を中おい配置するか(true or false)
    pauseOnHover:false,//マウスオーバー時にスライドを止めるか(true or false)
    dots: true,//現在の表示を示すポインタを表示するか(true or false)
    arrows: true,//ページ送りの矢印を表示するか(true or false)
    fade: false,//スライドの仕方をフェードインアウトにするか(true or false)
    variableWidth: false,//スライダー内の画像サイズを本来の画像サイズにするか(true or false)
    prevArrow: '<div class="slider-arrow slider-prev"><img src=""></div>',//ひとつ前に戻るボタンのHTML
    nextArrow: '<div class="slider-arrow slider-next"><img src=""></div>',//ひとつ進むボタンのHTML
    responsive: [
      {
        breakpoint: 640,//ウィンドウサイズ640px以下の場合は以下の設定を適用
        settings: {
          centerPadding: '0',
          centerMode: false,
          variableWidth: false,
        }
      }
    ],
  });
 
  });
}
