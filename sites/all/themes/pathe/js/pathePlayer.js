jQuery(document).ready(function() {
	CTRL_MMM.init();
});

var rootURL = Drupal.settings.basePath;

function initWebsite(){
	// FIXME: il faut s'assurer que cette fonction a été appelée AVANT d'appeler setPlayerContent().
};

/**
 * Cette fonction génére dynamiquement le HTML de la div player en fonction des paramètres passés
 * @param title
 * @param statut
 * @param listVideo
 * @param url_partage
 * @param url_fiche_film
 * @returns {Boolean}
 */
function setPlayerContent(title,statut,listVideo,url_partage, url_fiche_film) {
	// on séléctionne la video qui s'affiche par défaut
	for(var i=0; i < listVideo.length; i++){
		var obj = listVideo[i];
		if(obj.display_default == true){
			id_video_default = obj.id_mmm_video;
		}
	}
	
	var htmlPlayer = '<div class="box">';
	htmlPlayer += '<p class="mark">Fermer <a href="#" class="close">Close</a></p>';
	
	htmlPlayer += '<div id="videoplayer"></div>';
	htmlPlayer += '<h2>galerie Vidéos &amp; photos</h2>';
	htmlPlayer += '<div class="holder">';

	htmlPlayer += '<div class="gallery g5">';
	htmlPlayer += '<a href="#" class="link-prev">&lt;</a>';
	htmlPlayer += '<div class="frame">';
	
	htmlPlayer += '<ul>';
	var cnt = 0;
	for(var i=0; i < listVideo.length; i++){
		cnt ++;
		var obj = listVideo[i];
		obj.img_desc.replace('"','&quot;');
		obj.texte.replace('"','&quot;');
		if (cnt % 4 == 1) htmlPlayer += '<li><ul>';
		htmlPlayer += '<li>';
		htmlPlayer += '<a href="#" onclick="displayVideo(\''+obj.id_mmm_video+'\'); return false"><img src="'+obj.img_path+'" alt="'+obj.img_desc+'" width="148" height="76" /></a>';
		htmlPlayer += '<strong>'+obj.texte+'</strong>';
		htmlPlayer += '</li>';
		if(cnt % 4 ==0)htmlPlayer += "</li></ul>";
	}
	if(cnt % 4 == 1) htmlPlayer += "</li></ul>";
	htmlPlayer += '</ul>';
	
	htmlPlayer += '</div>';
	htmlPlayer += '<a href="#" class="link-next">&gt;</a>';
	htmlPlayer += '</div>';

	htmlPlayer += '<div class="panel">';
	
	htmlPlayer += '<ul class="topiclist">';
		htmlPlayer += '<li>';
		htmlPlayer += '<a href="'+url_fiche_film+'" class="fiche">Voir la fiche</a>';
		htmlPlayer += '</li>';
		
		htmlPlayer += '<li>';
		htmlPlayer += '<a href="fichefilmGP.html #search" class="film">Je veux voir ce film</a>';
		htmlPlayer += '</li>';
	htmlPlayer += '</ul>';
	
	htmlPlayer += '<div class="social">';
	htmlPlayer += '<strong>Partager</strong>';
	
	htmlPlayer += '<ul>';
		htmlPlayer += '<li><a href="'+url_partage+'">facebook</a></li>';
		htmlPlayer += '<li><a href="'+url_partage+'" class="twitter">twitter</a></li>';
		htmlPlayer += '<li><a href'+url_partage+'" class="youtube">youtube</a></li>';
	htmlPlayer += '</ul>';
	
	htmlPlayer += '</div>';
	htmlPlayer += '</div>';
	htmlPlayer += '</div>';
	htmlPlayer += '</div>';
	
	jQuery("#player").html(htmlPlayer);

	initGallPlayer();
	
	// affichage de la première video par défaut
	displayVideo(id_video_default);
	
	return true;
};

function displayVideo(id){
	
	var html5Params = {
		autoStart : true,
		poster : rootURL+'sites/all/themes/pathe/js/html/img/poster.jpg',
		skin : rootURL+'sites/all/themes/pathe/js/html/css/exemple_skin.css',
		controls : true
	};
	var flashvars = {
		dummyFV	:"dummy"
	};
	var params = {
		wmode : 'opaque',
		scale : 'noscale',
		salign : 'tl'
	};
	var attributes = {
		id : 'player',
		name : 'player'
	};
	
	var cheminSwf = rootURL+"sites/all/themes/pathe/js/flash_custom/patheSite.swf";
	
	CTRL_MMM.buildPlayer(
		'videoplayer', id, 852, 479, html5Params,
		cheminSwf, flashvars, params, attributes
	);
};

function setImageGallery(Title, listImages, url_partage, url_fiche_film){
	var htmlPlayer = '<div class="box">';
	htmlPlayer += '<p class="mark">Fermer <a href="#" class="close">Close</a></p>';
	htmlPlayer += '<div id="big">';
	//htmlPlayer += '<div class="gallery photoBig">';
	//htmlPlayer += '<a href="#" class="link-prev">&lt;</a>';
	//htmlPlayer += '<div class="frame" style="width:852px;">';
	//htmlPlayer += '<ul>';
	// Image par défaut
	for(var i=0; i < listImages.length; i++){
		var obj = listImages[i];
		if(obj.display_default == true){
			//htmlPlayer += '<li>';
			//htmlPlayer += '<div id="tab'+j+'">';
			htmlPlayer += '<img src="'+obj.img_path_big+'" alt="'+obj.img_desc+'" width="852" height="440" />';
			//htmlPlayer += '</div>';
			//htmlPlayer += '</li>';
			var cpr = obj.copyright;
		}
	}
	//htmlPlayer += '</ul>';
	//htmlPlayer += '</div>';
	//htmlPlayer += '<a href="#" class="link-next">&gt;</a>';
	htmlPlayer += '</div>';
	htmlPlayer += '<h2 style="display:block;float:left;clear:both;">galerie photos</h2>';
	htmlPlayer += '<div id="copyright" style="font-style:italic;float:right;margin:4px;">' + cpr + '</div>';
	htmlPlayer += '<div style="clear:both;" class="holder">';

	htmlPlayer += '<div class="gallery g5">';
	htmlPlayer += '<a href="#" class="link-prev">&lt;</a>';
	htmlPlayer += '<div class="frame">';
	
	htmlPlayer += '<ul>';
	var cnt = 0;
	for(var i=0; i < listImages.length; i++){
		cnt ++;
		var obj = listImages[i];
		obj.img_desc.replace('"','&quot;');
		obj.texte.replace('"','&quot;');
		if (cnt % 4 == 1) htmlPlayer += '<li><ul>';
		htmlPlayer += '<li>';
		htmlPlayer += '<a href="#" onclick="displayBig(\''+obj.img_path_big+'\',\''+obj.img_desc+'\',\''+obj.copyright+'\')"><img src="'+obj.img_path_small+'" alt="'+obj.img_desc+'" width="148" height="76" /></a>';
		htmlPlayer += '<strong>'+obj.texte+'</strong>';
		htmlPlayer += '</li>';
		if(cnt % 4 ==0)htmlPlayer += "</li></ul>";
	}
	if(cnt % 4 == 1) htmlPlayer += "</li></ul>";
	htmlPlayer += '</ul>';
	
	htmlPlayer += '</div>';
	htmlPlayer += '<a href="#" class="link-next">&gt;</a>';
	htmlPlayer += '</div>';

	htmlPlayer += '<div class="panel">';
	
	htmlPlayer += '<ul class="topiclist">';
		htmlPlayer += '<li>';
		htmlPlayer += '<a href="'+url_fiche_film+'" class="fiche">Voir la fiche</a>';
		htmlPlayer += '</li>';
		
		htmlPlayer += '<li>';
		htmlPlayer += '<a href="fichefilmGP.html #search" class="film">Je veux voir ce film</a>';
		htmlPlayer += '</li>';
	htmlPlayer += '</ul>';
	
	htmlPlayer += '<div class="social">';
	htmlPlayer += '<strong>Partager</strong>';
	
	htmlPlayer += '<ul>';
		htmlPlayer += '<li><a href="'+url_partage+'">facebook</a></li>';
		htmlPlayer += '<li><a href="'+url_partage+'" class="twitter">twitter</a></li>';
		htmlPlayer += '<li><a href'+url_partage+'" class="youtube">youtube</a></li>';
	htmlPlayer += '</ul>';
	
	htmlPlayer += '</div>';
	htmlPlayer += '</div>';
	htmlPlayer += '</div>';
	htmlPlayer += '</div>';
	
	jQuery("#player").html(htmlPlayer);

	initGallPlayer();
};

function displayBig(path,desc,copyright){
	jQuery("#big").html('');
	jQuery("#copyright").html('');
	jQuery("#big").html('<img src="'+path+'" alt="'+desc+'" width="852" height="440" />').fadeIn('slow');
	jQuery("#copyright").html(copyright).fadeIn('fast');
};





