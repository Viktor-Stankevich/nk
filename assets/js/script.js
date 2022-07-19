$(document).ready(function() {

  new WOW().init();

  // Slide menu btn el
  const menu_btn = $('.menu > .menu-btn');
  const menu_btn_category = $('.category > .menu-btn');
  // Slide menu list el
  const menu_list = $('.menu');
  const menu_list_category = $('.category');

  // Slide menu init
  menu(menu_btn, menu_list, menu_list_category, menu_btn_category);

  // Slide menu function
  function menu(btn, menu, menu_category, btn_category) {

    $(btn_category).on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $(menu_category).toggleClass('menu_active');
      $('body').toggleClass('block');
    })
    
    $(btn).on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $(menu).toggleClass('menu_active');
      $('body').toggleClass('block');
    })

  };

  // Magnific popup
  $('.gallery-list').magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });


});