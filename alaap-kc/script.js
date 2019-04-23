//code for the mobile navigation

$(function(){
							var nav=$('#nav');
							$('.mobile-only').bind('click',function () {
								nav.toggleClass('menu-slide');
								return false;
								
							});
							});
							
							//code for the event menu
							
							$(function(){
							var roll = $('#roll');
   								 $('#roll2').bind('click',function(){
        								roll.toggleClass('show');
        								return false;
  								  });
								});
								

//code for slideshow
$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});

//code for fb links

			(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
