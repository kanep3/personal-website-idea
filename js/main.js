jQuery(document).on("scroll", function () {
  jQuery("h2").css("left", Math.max(200 - 0.2 * window.scrollY, -200) + "vh");
  jQuery("h3").css("right", Math.max(700 - 0.2 * window.scrollY, 1) + "vh");
});

