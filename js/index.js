function navigation(){
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px')

	$(window).resize(function(){
		setTimeout(navigation, 500);
	});
}

// HOME PAGE JS
function homeNav(){
	$(document).ready(function(){
		$(".primary-nav a, .footer-nav a, .main .btn, .about .btn").on('click', function(e) {
			e.preventDefault();
	    	var hash = this.hash;
	    	$('body').animate({
	    		scrollTop: $(hash).offset().top
	      	}, 500, function(){
	    		window.location.hash = hash;
	      	}); 
		});
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

function dynamicHeights(){ //Resize handler for window onload function
	//About section
	//Determine if the image is larger than the description box - larger screen widths
	//If the description is smaller than the image, center description instead of image
	if ($('.about-thumbnail').height() < $('.about-general-description').outerHeight()){
		$('.about-thumbnail').css('margin-top', ($('.about-general-description').outerHeight()-$('.about-thumbnail').height())/2);
	}
	else {
		$('.about-general-description').css('margin-top', ($('.about-thumbnail').outerHeight()-$('.about-general-description').height())/2);
	}

	if ($('.statistic-description-thumbnail').height() < $('.about-statistic-description').outerHeight()){
		$('.statistic-description-thumbnail').css('margin-top', ($('.about-statistic-description').outerHeight()-$('.statistic-description-thumbnail').height())/2);
	}
	else {
		$('.about-statistic-description').css('margin-top', ($('.statistic-description-thumbnail').outerHeight()-$('.about-statistic-description').height())/2);
	}
	
	//Summary section
	$('.development-img').css('margin-top', ($('.development-description').outerHeight()-$('.development-img').outerHeight())/2);
	$('.responsive-img').css('margin-top', ($('.responsive-description').outerHeight()-$('.responsive-img').outerHeight())/2);
	$('.idea-img').css('margin-top', ($('.idea-description').outerHeight()-$('.idea-img').outerHeight())/2);
	$('.passion-img').css('margin-top', ($('.passion-description').outerHeight()-$('.passion-img').outerHeight())/2);

	//Contact section
	$('.contact-form-body').css('padding-top', ($('.contact-instructions').outerHeight()-$('.contact-form-body').height())/2);
}

function contactValidate(email, firstnameval, lastnameval, msgval){
	var emailRE = /\S+@\S+\.\S+/;
	var nameRE = /^[A-Za-z\s]+$/;
	var emailValidation = emailRE.test(email);
	var msgValidation = $.trim(msgval == '');
	var name;
	if (!nameRE.test(firstnameval) || !nameRE.test(lastnameval)){
		name = false;
	}
	else {
		name = true;
	}

	if (emailValidation && name && msgValidation){
		return true;
	}
	else {
		return false;
	}
}

function contactFormSubmit(){
	var firstName = $('.firstname input').value;
	var lastName = $('.lastname input').value;
	var prefEmail = $('.email input').value;
	var msg = $('.message textarea').value;
	if (contactValidate(prefEmail, firstName, lastName, msg)){
		var emailBody = 'The following information has been automatically generated through the contact form that was completed. Please do not alter or change this section as I would like to know who I am speaking with! :) \n' +
			'Full Name: ' + firstName + ' ' + lastName + '\n' +
			'Reply Email: ' + prefEmail + '\n' +
			msg;
		window.location.href = 'mailto: rychiu13@gmail.com?subject=Website Message&body=' + emailBody;
	}
	else {
		if (!/^[A-Za-z\s]+$/.test(firstName) || $.trim(lastName == '')){
			$('.firstname-error').css('display', 'initial');
		}
		if (!/^[A-Za-z\s]+$/.test(lastName) || $.trim(firstName == '')){
			$('.lastname-error').css('display', 'initial');
		}
		if (!/\S+@\S+\.\S+/.test(prefEmail)){
			$('.email-error').css('display', 'initial');
		}
		if ($.trim(msg == '')){
			$('.message-error').css('display', 'initial');
		}
	}
}

window.onload = function(){
	//About section
	//Determine if the image is larger than the description box - larger screen widths
	//If the description is smaller than the image, center description instead of image
	if ($('.about-thumbnail').height() < $('.about-general-description').outerHeight()){
		$('.about-thumbnail').css('margin-top', ($('.about-general-description').outerHeight()-$('.about-thumbnail').height())/2);
	}
	else {
		$('.about-general-description').css('margin-top', ($('.about-thumbnail').outerHeight()-$('.about-general-description').height())/2);
	}

	if ($('.statistic-description-thumbnail').height() < $('.about-statistic-description').outerHeight()){
		$('.statistic-description-thumbnail').css('margin-top', ($('.about-statistic-description').outerHeight()-$('.statistic-description-thumbnail').height())/2);
	}
	else {
		$('.about-statistic-description').css('margin-top', ($('.statistic-description-thumbnail').outerHeight()-$('.about-statistic-description').height())/2);
	}

	//Summary section
	$('.development-img').css('margin-top', ($('.development-description').outerHeight()-$('.development-img').outerHeight())/2);
	$('.responsive-img').css('margin-top', ($('.responsive-description').outerHeight()-$('.responsive-img').outerHeight())/2);
	$('.idea-img').css('margin-top', ($('.idea-description').outerHeight()-$('.idea-img').outerHeight())/2);
	$('.passion-img').css('margin-top', ($('.passion-description').outerHeight()-$('.passion-img').outerHeight())/2);

	//Contact section
	$('.contact-form-body').css('padding-top', ($('.contact-instructions').outerHeight()-$('.contact-form-body').height())/2);

	$(window).resize(function(){
		setTimeout(dynamicHeights, 1000);
	});
}
// END HOME PAGE JS



// PROJECTS PAGE JS
function bodyNavigationHeight(){
	$('.projects-selector').css('height', $('.projects-description').outerHeight());

	$(window).resize(function(){
		setTimeout(bodyNavigationHeight, 1000);
	});
}