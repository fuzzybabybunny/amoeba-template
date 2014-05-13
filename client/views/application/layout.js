// Meteor.startup( function () {
//   $.getScript("assets/js/jquery.min.js");
//   $.getScript("assets/js/bootstrap.min.js");
//   $.getScript("assets/js/isotope.pkgd.min.js");
//   $.getScript("assets/js/imagesloaded.min.js");
//   $.getScript("assets/js/jquery.scrollTo.min.js");
//   $.getScript("assets/js/jquery.nav.min.js");
//   $.getScript("assets/js/jquery.appear.min.js");
//   $.getScript("assets/js/twitterFetcher.min.js");
//   $.getScript("assets/js/script.js");
// });

// Template.layout.rendered( function () {
//   $.getScript("assets/js/jquery.min.js");
//   $.getScript("assets/js/bootstrap.min.js");
//   $.getScript("assets/js/isotope.pkgd.min.js");
//   $.getScript("assets/js/imagesloaded.min.js");
//   $.getScript("assets/js/jquery.scrollTo.min.js");
//   $.getScript("assets/js/jquery.nav.min.js");
//   $.getScript("assets/js/jquery.appear.min.js");
//   $.getScript("assets/js/twitterFetcher.min.js");
//   $.getScript("assets/js/script.js");
// });

Template.layout.created = function() {
  $('head').append('<script type="text/javascript" src="js/modernizr-2.6.2-respond-1.1.0.min.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.easing.1.3.js">');
  $('head').append('<script type="text/javascript" src="js/bootstrap.min.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.isotope.min.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.nicescroll.min.js">');
  $('head').append('<script type="text/javascript" src="js/fancybox/jquery.fancybox.pack.js">');
  $('head').append('<script type="text/javascript" src="js/skrollr.min.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.scrollTo-1.4.3.1-min.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.localscroll-1.2.7-min.js">');
  $('head').append('<script type="text/javascript" src="js/stellar.js">');
  $('head').append('<script type="text/javascript" src="js/jquery.appear.js">');
  $('head').append('<script type="text/javascript" src="js/validate.js">');
  $('head').append('<script type="text/javascript" src="js/main.js">');

}

// $.getScript('assets/js/script.js', function() {
//       initNavbar();
//       initPortfolio();
//       initAnimations();
//       initTwitterFeed();
//       $(".loader .fading-line").fadeOut();
//       $(".loader").fadeOut("slow");
// });