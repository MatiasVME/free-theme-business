
/**
 *  Navegation events
 */ 

/* Automatic add html/pages/home.html */
$('#main-content').load('html/pages/home.html');

/* Add html/pages/about.html */
$('#nav-about').on('click', function(e){
	e.preventDefault();
	$('#main-content').load('html/pages/about.html');
});

/* Add html/pages/home.html */
$('#nav-home').on('click', function(e){
	e.preventDefault();
	$('#main-content').load('html/pages/home.html');
});

/* Add html/pages/projects.html */
$('#nav-projects').on('click', function(e){
	e.preventDefault();
	$('#main-content').load('html/pages/projects.html');
});

/* Add html/pages/team.html */
$('#nav-team').on('click', function(e){
	e.preventDefault();
	$('#main-content').load('html/pages/team.html');
});