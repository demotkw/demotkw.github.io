// Đây là khi cuộn màn hình xuống và thanh nav cũng sẽ được giữ
pos = $(".nav").position();

$(window).scroll(function(){
	var posScroll = $(document).scrollTop();
	if (parseInt(posScroll) > parseInt(pos.top)) {
		$(".nav").addClass('fixed');
	} else {
		$(".nav").removeClass('fixed');
	}
});