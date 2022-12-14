$(document).ready(
	function () {

		// sticky nav
		$('.products-section').waypoint(
			function (direction) {
				if (direction == "down") {
					$('nav').addClass('sticky');
				} else {
					$('nav').removeClass('sticky');
				}
			}, {
			offset: '600px'
		}
		)

		// Scroll
		$('a').click(function (event) {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 700);
			event.preventDefault();
		});

		// mobile navigation
		$('.mobile-nav-icon').click(
			function () {
				$('.main-nav').slideToggle(300);

				if ($('.mobile-nav-icon').hasClass('fa-bars')) {
					$('.mobile-nav-icon').addClass('fa-times');
					$('.mobile-nav-icon').removeClass('fa-bars')
				}
				else {
					$('.mobile-nav-icon').addClass('fa-bars');
					$('.mobile-nav-icon').removeClass('fa-times')
				}
			}
		)
	}
)
///////////////////////////////////////////////////////////////////////////////////////////////////
//slide tự chạy, và ngưng tự chạy khi người dùng click nút
$(document).ready(function () {
	var autoLoad = setInterval(function () {
		$('#btn-next').trigger('click');
	}, 3000);
	var autoLoad = setInterval(function () {
		$('#btn-next').trigger('click');
	}, 3000);
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Nút phải
	$('#btn-next').click(function (event) {
		clearInterval(autoLoad);
		var slide_sau = $('.active').next();
		var vi_tri_hien_tai = $('.active_nut').index() + 1;
		if (slide_sau.length != 0) {
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active_nut');
			$('.nut-slide ul li:nth-child(' + (vi_tri_hien_tai + 1) + ')').addClass('active_nut');
		} else {
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active_nut');
			$('.nut-slide ul li:nth-child(1)').addClass('active_nut');
		}
	});
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Nút trái
	$('#btn-prev').click(function (event) {
		clearInterval(autoLoad);
		var slide_truoc = $('.active').prev();
		var vi_tri_hien_tai = $('.active_nut').index() + 1;
		if (slide_truoc.length != 0) {
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active_nut');
			$('.nut-slide ul li:nth-child(' + (vi_tri_hien_tai - 1) + ')').addClass('active_nut');
		} else {
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			// xử lý nút 
			$('.nut-slide ul li').removeClass('active_nut');
			$('.nut-slide ul li:last-child').addClass('active_nut');
		}
	});
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Phần các nút phân trang
	$('.nut-slide ul li').click(function (event) {
		clearInterval(autoLoad);
		var vi_tri_hien_tai = $('.active_nut').index() + 1;
		var vi_tri_click = $(this).index() + 1;
		$('.nut-slide ul li').removeClass('active_nut');
		$(this).addClass('active_nut');
		if (vi_tri_click > vi_tri_hien_tai) {
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.slide:nth-child(' + vi_tri_click + ')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}
		if (vi_tri_click < vi_tri_hien_tai) {
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:nth-child(' + vi_tri_click + ')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
	});
});
