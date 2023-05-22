/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

  jQuery('.drawer-icon').on('click',function(e){
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active__2');
  jQuery('.drawer-content').toggleClass('is-active__2');
  jQuery('.drawer-background').toggleClass('is-active__2');

  return false;
  });

  jQuery('.drawer-content__item a').on('click',function(e){
    e.preventDefault();
  
    // メニューを閉じる
    jQuery('.drawer-icon').removeClass('is-active__2');
    jQuery('.drawer-content').removeClass('is-active__2');
    jQuery('.drawer-background').removeClass('is-active__2');
  
    // スムーズスクロールするためのコード
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#'){
      position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    }, 300);
  
    return false;
  });


  /*トップに戻る*/
  jQuery('header a[href^="#"]').on('click',function(){

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#'){
    var position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
  });

  jQuery(window).on('scroll',function(){
    if(800 < jQuery(this).scrollTop()){
      jQuery('.to-logo').addClass('is-show');
    } else{
      jQuery('.to-logo').removeClass('is-show');
    }
  });


  /*トップに戻る*/
  jQuery('a[href^="#"]').on('click',function(){

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#'){
    var position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
  });

  jQuery(window).on('scroll',function(){
    if(100 < jQuery(this).scrollTop()){
      jQuery('.to-top').addClass('is-show');
    } else{
      jQuery('.to-top').removeClass('is-show');
    }
  });