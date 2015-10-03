var bio = {
	'name' : 'Simon Parks',
	'role' : 'Front End Web Developer',
	'contacts' : {
		'mobile' : '0798 397 2886',
		'email' : 'simoncparks@googlemail.com',
		'github' : 'simoncparks',
		'twitter' : '@simoncparks',
		'location' : 'St Albans, Herts, UK'
	},
	'welcomeMessage' : 'Welcome to my CV',
	'skills' : ['Coding', ' Problem Solving', ' Others'],
	'bioPic' : 'images/Me.jpg'
};



bio.display = function () {
		var formattedName = HTMLheaderName.replace('%data%', this.name);
		var formattedRole = HTMLheaderRole.replace('%data%', this.role);
		var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
		var formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter);
		var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
		var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);
		var formattedBioPic = HTMLbioPic.replace('%data%', this.bioPic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#topContacts').append(formattedMobile);
		$('#topContacts').append(formattedEmail);
		$('#topContacts').append(formattedTwitter);
		$('#topContacts').append(formattedGithub);
		$('#topContacts').append(formattedLocation);
		$('#header').append(formattedBioPic);
		$('#header').append(formattedWelcomeMessage);
		$('#header').append(HTMLskillsStart);
		for (var skills in this.skills){
			var formattedSkills = HTMLskills.replace('%data%', this.skills[skills]);
			$('#skills').append(formattedSkills);
		}
		$('#footerContacts').append(formattedMobile);
		$('#footerContacts').append(formattedEmail);
		$('#footerContacts').append(formattedTwitter);
		$('#footerContacts').append(formattedGithub);
		$('#footerContacts').append(formattedLocation);
}

bio.display();

var education = {
	'schools' : [
		{
			'name' : 'University of Warwick',
			'location' : 'Leamington Spa, UK',
			'degree' : 'Philosophy',
			'majors' : ['Philosophy'],
			'dates' : 2008,
			'url' : 'https://www2.warwick.ac.uk/'
		} ,
		{
			'name' : 'Woodhouse Sixth Form College',
			'location' : 'North Finchley, London, UK',
			'degree' : 'A-Levels',
			'majors' : ['Geography ', 'History ', 'Maths'],
			'dates' : 2005,
			'url' : 'http://www.woodhouse.ac.uk/'
		}
	] ,
	'onlineCourses' : [
		{
			'title' : 'Front End Web Developer Nanodegree',
			'school' : 'Udacity',
			'dates' : 2015,
			'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]
};



education.display = function (){
	$('#education').append(HTMLschoolStart);
	for(var schools in this.schools){
		var formattedSchoolName = HTMLschoolName.replace('%data%', this.schools[schools].name) + HTMLschoolDegree.replace('%data%', this.schools[schools].degree);
		var formattedSchoolDate = HTMLschoolDates.replace('%data%', this.schools[schools].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', this.schools[schools].location);
		$('.education-entry:last').append(formattedSchoolName);
		$('.education-entry:last').append(formattedSchoolDate);
		$('.education-entry:last').append(formattedSchoolLocation);
		for(var majors in this.schools[schools].majors)
			var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', this.schools[schools].majors[majors]);
			$('.education-entry:last').append(formattedSchoolMajors);
	};
	$('.education-entry:last').append(HTMLonlineClasses);
	for(var olClasses in this.onlineCourses){
		var formattedOlTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[olClasses].title) + HTMLonlineSchool.replace('%data%', this.onlineCourses[olClasses].school);
		var formattedOlDates = HTMLonlineDates.replace('%data%', this.onlineCourses[olClasses].dates);
		var formattedOlURL = HTMLonlineURL.replace('%data%', this.onlineCourses[olClasses].url);
		$('.education-entry:last').append(formattedOlTitle);
		$('.education-entry:last').append(formattedOlDates);
		$('.education-entry:last').append(formattedOlURL);
	}
}

education.display();

var work = {
	'jobs' : [
		{
			'employer' : 'Air Business Ltd',
			'title' : 'Project Implementation Executive',
			'location' : 'St Albans, Herts, UK',
			'dates' : '2012-2015',

			'description' : 'Building and maintaining systems for a data processing department at ' +
			'an international mailhouse both individually and as part of a team. Providing front-line ' +
			'support to off-site data processing teams. Writing software specifications.'
		} ,
		{
			'employer' : 'Air Business Ltd',
			'title' : 'Database Administrator',
			'location' : 'St Albans, Herts, UK',
			'dates' : '2008-2012',
			'description' : 'Processing overseas address data for an international mailhouse'
		}
	]
};



work.display = function () {
	for (var myjobs in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[myjobs].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[myjobs].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[myjobs].dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[myjobs].location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[myjobs].description);

		$('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedWorkLocation);
		$('.work-entry:last').append(formattedWorkDescription);
	}
}

work.display();

var projects = {
	'projects' : [
		{
			'title' : 'Portfolio',
			'dates' : '2015',
			'description' : 'My first website. Part of Udacity course',
			'images' : ['images/Me.jpg', 'images/fry.jpg']
		},
		{
			'title' : 'Second Project',
			'dates' : '2016',
			'description' : 'Something cool to show off my new skills',
			'images' : ['images/fry.jpg', 'images/Me.jpg']
		}
	]
};



projects.display = function (){

	for (project in projects.projects){

	$('#projects').append(HTMLprojectStart);

	var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
	$('.project-entry:last').append(formattedProjTitle);

	var formattedProjDate = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
	$('.project-entry:last').append(formattedProjDate);

	var formattedProjDesc = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
	$('.project-entry:last').append(formattedProjDesc);

	for (var image in projects.projects[project].images){

		var formattedProjImg = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);

		$('.project-entry:last').append(formattedProjImg);
		}
	}
}

projects.display();

$('#mapDiv').append(googleMap);