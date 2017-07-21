function navigation(){
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px')

	$(window).resize(function(){
		setTimeout(navigation, 500);
	});
}

function projects(){
	$('.luvtalk-project').css('height', $('.luvtalk-project').width());
	$('.luvtalk-project h3').css('padding-top', ($('.luvtalk-project').height() - $('.luvtalk-project h3').height() - $('.luvtalk-project .row').outerHeight())/2);
	$('.personal-website-project').css('height', $('.personal-website-project').width());
	$('.personal-website-project h3').css('padding-top', ($('.personal-website-project').height() - $('.personal-website-project h3').height() - $('.personal-website-project .row').outerHeight())/2);
	$('.strike-zone-project').css('height', $('.strike-zone-project').width());
	$('.strike-zone-project h3').css('padding-top', ($('.strike-zone-project').height() - $('.strike-zone-project h3').height() - $('.strike-zone-project .row').outerHeight())/2);
	$('.sdac-project').css('height', $('.sdac-project').width());
	$('.sdac-project h3').css('padding-top', ($('.sdac-project').height() - $('.sdac-project h3').height() - $('.sdac-project .row').outerHeight())/2);

	$(window).resize(function(){
		setTimeout(projects, 500);
	});
}

function dynamicHeights(){
	//About section
	$('.about-thumbnail').css('margin-top', ($('.about-general-description').outerHeight()-$('.about-thumbnail').height())/2);
	$('.statistic-description-thumbnail').css('margin-top', ($('.about-statistic-description').outerHeight()-$('.statistic-description-thumbnail').height())/2);
	
	//Summary section
	$('.development-img').css('margin-top', ($('.development-description').outerHeight()-$('.development-img').outerHeight())/2);
	$('.responsive-img').css('margin-top', ($('.responsive-description').outerHeight()-$('.responsive-img').outerHeight())/2);
	$('.idea-img').css('margin-top', ($('.idea-description').outerHeight()-$('.idea-img').outerHeight())/2);
	$('.passion-img').css('margin-top', ($('.passion-description').outerHeight()-$('.passion-img').outerHeight())/2);

	//Contact section
	$('.contact-form-body').css('padding-top', ($('.contact-instructions').outerHeight()-$('.contact-form-body').height())/2);

	$(window).resize(function(){
		setTimeout(dynamicHeights, 500);
	});
}

$(document).ready(function(){
	$(".primary-nav a, .footer-nav a, .btn").on('click', function(e) {
		e.preventDefault();
    	var hash = this.hash;
    	$('body').animate({
    		scrollTop: $(hash).offset().top
      	}, 500, function(){
    		window.location.hash = hash;
      	}); 
	});
});