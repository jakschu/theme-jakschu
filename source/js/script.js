
/*(function($){
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Caption
  $('.entry-content').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }
*/
(function(d,w,undefined){
  'use strict';
  // Mobile nav
  var mobileNavPanel = d.getElementById('mobile-nav-panel');
  var siteNav = d.getElementById('site-nav');
  mobileNavPanel.addEventListener("click",function() {
    siteNav.classList.toggle("active")
  });
  // search stuff
  // handle focus, blur, etc

  // Elements:
	// #toggle-search
	// #search

	var search = document.getElementById("search");
	var searchToggle = document.getElementById("toggle-search");

	// unnecessary right now:
	// search.addEventListener("focus", function( event ) {
	// 	event.target.style.outline = "1px solid pink";
	// }, true);
	// TODO Debug this: should close on second click
	searchToggle.addEventListener("change", function(event){
		if (searchToggle.checked === true){
			console.log("giving focus to search")
			search.focus();
		} else {
			search.blur();
		}
		console.log("change event triggered");
	}, true);

// disable for now
	// search.addEventListener("blur", function(event) {
	// 	searchToggle.checked = false;
	// }, true);

})(document,window);


