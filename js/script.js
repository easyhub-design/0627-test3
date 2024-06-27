

$('.box_wrap').isotope({
    // options
    itemSelector: '.box',
    layoutMode: 'masonry'
  });

  $(".btns>li").click(function(){
    $(this).addClass("active")
    $(this).siblings().removeClass("active");
    const i=$(this).attr("data-filter") //속성 메서드 (호출)
    //$(this).attr("data-filter","속성값")//속성 메서드(호출+값 변경)//
    $('.box_wrap').isotope({filter:i})
  })