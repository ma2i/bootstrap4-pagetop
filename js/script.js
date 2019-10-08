
//======================================================================
// 300px以上、下にスクロールしたら「ページの先頭に移動するボタン」を表示
//======================================================================


$(window).scroll(function() {
  var y_current = $(document).scrollTop();
  if (300 < y_current) {
    $('a.pagetop').fadeIn('slow');
  } else {
    $('a.pagetop').fadeOut('slow');
  }
});




$(function () {
  var time    = 600; // アニメーションの長さ
  var offsetY = 0;   // ヘッダー固定の場合は、その値を「マイナス値」で指定する

  $('body').on('click', 'a[href^="#"]', function () {
    var href;
    href = $(this).attr('href');
    if (href === '#') {
      return;
    }
    $('html, body').animate({
      scrollTop: $(href).offset().top + offsetY
    }, {
        duration: time,
        easing: 'easeOutExpo'
      });
    return false;
  });
})
