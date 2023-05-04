$(function () {
  $(".hamburger").click(function () {
    $(".hmenu").toggleClass("open");
  });

  $(".hmenu>ul>li>a").click(function () {
    if ($(this).next().is(":visible")) {
      $(this).next().stop().slideUp(500);
      $("hmenu ul li a").removeClass("color");
      $(this).find("i").removeClass("up");
    } else {
      $(".sub").stop().slideUp(500);
      $(this).next().stop().slideDown(500);
      $(".hmenu ul li a").removeClass("color");
      $(this).addClass("color");
      $(".hmenu>ul>li>a>i").removeClass("up");
      $(this).find("i").addClass("up");
    }
  });
  // 베너메뉴 스와이퍼\/
  const swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
  });
  // fixed
  $(".page-header").each(function () {
    const $window = $(window),
      header = $(this), //헤더의 기본 위치를 검색
      headerOffsetTop = header.offset().top; //웹 페이지 상단부터의 거리

    $window.on("scroll", function () {
      /* 윈도우의 스크롤 량을 확인하고, 헤더의 기본 위치를 지나서 있으면 클래스를 부여,
       그렇지 않으면 삭제*/
      if ($window.scrollTop() > headerOffsetTop) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  });

  $("#tablet").each(function () {
    const $window = $(window),
      header = $(this), //헤더의 기본 위치를 검색
      headerOffsetTop = header.offset().top; //웹 페이지 상단부터의 거리

    $window.on("scroll", function () {
      /* 윈도우의 스크롤 량을 확인하고, 헤더의 기본 위치를 지나서 있으면 클래스를 부여,
       그렇지 않으면 삭제*/
      if ($window.scrollTop() > headerOffsetTop) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  });
  $("#t_menu").each(function () {
    const $window = $(window),
      header = $(this), //헤더의 기본 위치를 검색
      headerOffsetTop = header.offset().top; //웹 페이지 상단부터의 거리

    $window.on("scroll", function () {
      /* 윈도우의 스크롤 량을 확인하고, 헤더의 기본 위치를 지나서 있으면 클래스를 부여,
       그렇지 않으면 삭제*/
      if ($window.scrollTop() > headerOffsetTop) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  });

  const defaultTop = parseInt($("#tquick").css("top"));
  $(window).on("scroll", function () {
    const scv = $(window).scrollTop();
    $("#tquick")
      .stop()
      .animate({ top: scv + defaultTop + "px" }, 1000);
  });
  $("#tquick ul a").click(function (e) {
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
  });

  $(".ppc_menu>li>a").mouseenter(function () {
    $(".f_menu").stop().slideUp(500);
    $(this).next().stop().slideDown(500);
  });
  $(".menu").mouseleave(function () {
    $(".f_menu").stop().slideUp(500);
  });
});
