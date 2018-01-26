function navigation(){ //Center navigation bar
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px');

	$(window).resize(function(){
		setTimeout(navigation, 500);
	});
}

// HOME PAGE JS
$(document).ready(function(){
	$(".primary-nav-home a, .navable, .main .btn, .about .btn").on('click', function(e) {
		e.preventDefault();
    	var hash = this.hash;
    	$('html, body').animate({
    		scrollTop: $(hash).offset().top
     	}, 500, function(){
    		window.location.hash = hash;
      	}); 
	});
});

function projects(){
	if ($(window).width() > 343){
		$('.luvtalk-project').css('height', $('.luvtalk-project').width());
		$('.luvtalk-project h3').css('padding-top', ($('.luvtalk-project').height() - $('.luvtalk-project h3').height() - $('.luvtalk-project .row').outerHeight())/2);
		$('.personal-website-project').css('height', $('.personal-website-project').width());
		$('.personal-website-project h3').css('padding-top', ($('.personal-website-project').height() - $('.personal-website-project h3').height() - $('.personal-website-project .row').outerHeight())/2);
		$('.strike-zone-project').css('height', $('.strike-zone-project').width());
		$('.strike-zone-project h3').css('padding-top', ($('.strike-zone-project').height() - $('.strike-zone-project h3').height() - $('.strike-zone-project .row').outerHeight())/2);
		$('.sdac-project').css('height', $('.sdac-project').width());
		$('.sdac-project h3').css('padding-top', ($('.sdac-project').height() - $('.sdac-project h3').height() - $('.sdac-project .row').outerHeight())/2);
	}

	$(window).resize(function(){
		setTimeout(projects, 500);
	});
}

function dynamicHeights(){ //Resize handler for window onload function
	//About section
	//Determine if the image is larger than the description box - larger screen widths
	//If the description is smaller than the image, center description instead of image
	if ($('.about-thumbnail').height() < $('.about-general-description').outerHeight() && $(window).width() > 767){
		$('.about-thumbnail').css('margin-top', ($('.about-general-description').outerHeight()-$('.about-thumbnail').height())/2);
	}
	else {
		$('.about-general-description').css('margin-top', ($('.about-thumbnail').outerHeight()-$('.about-general-description').height())/2);
	}

	if ($('.statistic-description-thumbnail').height() < $('.about-statistic-description').outerHeight() && $(window).width() > 767){
		$('.statistic-description-thumbnail').css('margin-top', ($('.about-statistic-description').outerHeight()-$('.statistic-description-thumbnail').height())/2);
	}
	else {
		$('.about-statistic-description').css('margin-top', ($('.statistic-description-thumbnail').outerHeight()-$('.about-statistic-description').height())/2);
	}
	
	//Summary section
	if ($(window).width() > 769){
		$('.development-img').css('margin-top', ($('.development-description').outerHeight()-$('.development-img').outerHeight())/2);
		$('.responsive-img').css('margin-top', ($('.responsive-description').outerHeight()-$('.responsive-img').outerHeight())/2);
		$('.idea-img').css('margin-top', ($('.idea-description').outerHeight()-$('.idea-img').outerHeight())/2);
		$('.passion-img').css('margin-top', ($('.passion-description').outerHeight()-$('.passion-img').outerHeight())/2);
	}

	//Contact section
	$('.contact-form-body').css('padding-top', ($('.contact-instructions').outerHeight()-$('.contact-form-body').height())/2);
}

function contactValidate(email, firstnameval, lastnameval, msgval){
	var emailRE = /\S+@\S+\.\S+/;
	var nameRE = /^[A-Za-z\s]+$/;
	var emailValidation = emailRE.test(email);
	var msgValidation = /\S/.test(msgval);
	var name;
	if (!nameRE.test(firstnameval) && !nameRE.test(lastnameval)){
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
	var firstName = document.getElementById('firstname').value;
	var lastName = document.getElementById('lastname').value;
	var prefEmail = document.getElementById('email').value;
	var msg = document.getElementById('message').value;
	if (contactValidate(prefEmail, firstName, lastName, msg)){
		var emailBody = 'The following information has been automatically generated through the contact form that was completed. Please do not alter or change this section as I would like to know who I am speaking with! :) \r\n' +
			'Full Name: ' + firstName + ' ' + lastName + '\r\n' +
			'Reply Email: ' + prefEmail + '\r\n\r\n' +
			msg;
		emailBody = encodeURIComponent(emailBody);
		window.location.href = 'mailto: rychiu13@gmail.com?subject=Website Message&body=' + emailBody;
	}
	else {
		if (!/^[A-Za-z\s]+$/.test(firstName)){
			$('.firstname-error').css('display', 'initial');
		}
		else {
			$('.firstname-error').css('display', 'none'); //Reset field if valid
		}
		if (!/^[A-Za-z\s]+$/.test(lastName)){
			$('.lastname-error').css('display', 'initial');
		}
		else {
			$('.lastname-error').css('display', 'none'); //Reset field if valid
		}
		if (!/\S+@\S+\.\S+/.test(prefEmail)){
			$('.email-error').css('display', 'initial');
		}
		else {
			$('.email-error').css('display', 'none'); //Reset field if valid
		}
		if (!/\S/.test(msg)){
			$('.message-error').css('display', 'initial');
		}
		else {
			$('.message-error').css('display', 'none'); //Reset field if valid
		}
	}
}

window.onload = function(){
	//Navigation
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px');

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
	if ($(window).width() > 769){
		$('.development-img').css('margin-top', ($('.development-description').outerHeight()-$('.development-img').outerHeight())/2);
		$('.responsive-img').css('margin-top', ($('.responsive-description').outerHeight()-$('.responsive-img').outerHeight())/2);
		$('.idea-img').css('margin-top', ($('.idea-description').outerHeight()-$('.idea-img').outerHeight())/2);
		$('.passion-img').css('margin-top', ($('.passion-description').outerHeight()-$('.passion-img').outerHeight())/2);
	}

	//Contact section
	$('.contact-form-body').css('padding-top', ($('.contact-instructions').outerHeight()-$('.contact-form-body').height())/2);

	$(window).resize(function(){
		setTimeout(dynamicHeights, 1000);
		setTimeout(navigation, 1500);
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

function projectsSelector(){
	$('.disabled').hide();
	var activeLinks = document.getElementsByClassName('active-link');
	var activeBodies = document.getElementsByClassName('active');
	$('.projects-selector a, #dropdown .dropdown-menu li a').on('click', function(){
		var buttonText = $(this).text();
		for (var i = 0; i < activeLinks.length; i++){
			activeLinks[i].className = activeLinks[i].className.replace('active-link', ''); //Change anchor element that's active
		}
		for (var i = 0; i < activeBodies.length; i++){
			activeBodies[i].className = activeBodies[i].className.replace('active', 'disabled'); //Change visible text to active element's
			$('.disabled').hide();
		}
		$(this).addClass('active-link');
		if (/\s/.test(buttonText)){ //Check if the text has a space and replace with hyphen, allowing active content switching
			buttonText = 'projects-' + buttonText.replace(' ', '-').toLowerCase();
		}
		else { //Else only change text to lowercase to match html class
			buttonText = 'projects-' + buttonText.toLowerCase();
		}
		$('.' + buttonText).toggleClass('disabled active'); //Replace class that was selected to visible
		$('.active').fadeIn(750);
		bodyNavigationHeight();
	});
}

function playPause(){ //Projects video handler
	if (document.getElementById('projects-sdac-video').paused){
		document.getElementById('projects-sdac-video').play();
	}
	else {
		document.getElementById('projects-sdac-video').pause();
	}
}
