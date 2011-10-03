<?php 
global $oahu;
global $config;
require("config.inc.php"); 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" version="XHTML+RDFa 1.0" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">

<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="/pathe/misc/favicon.ico" type="image/vnd.microsoft.icon" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
  <title>Bienvenue sur Pathé Distributions | Pathé Distributions</title>
  <style type="text/css" media="all">@import url("/pathe/modules/system/system.base.css?lsa00d");
@import url("/pathe/modules/system/system.menus.css?lsa00d");
@import url("/pathe/modules/system/system.messages.css?lsa00d");
@import url("/pathe/modules/system/system.theme.css?lsa00d");</style>
<style type="text/css" media="all">@import url("/pathe/modules/field/theme/field.css?lsa00d");
@import url("/pathe/sites/all/modules/logintoboggan/logintoboggan.css?lsa00d");
@import url("/pathe/modules/node/node.css?lsa00d");
@import url("/pathe/modules/search/search.css?lsa00d");
@import url("/pathe/modules/user/user.css?lsa00d");</style>
<style type="text/css" media="all">@import url("/pathe/sites/all/modules/ctools/css/ctools.css?lsa00d");
@import url("/pathe/sites/all/modules/date/date_popup/themes/datepicker.1.7.css?lsa00d");
@import url("/pathe/sites/all/modules/field_group/field_group.field_ui.css?lsa00d");
@import url("/pathe/sites/all/modules/field_group/field_group.css?lsa00d");
@import url("/pathe/sites/all/modules/date/date_api/date.css?lsa00d");</style>
<style type="text/css" media="all">@import url("/pathe/sites/all/themes/pathe/styles/custom.css?lsa00d");
@import url("/pathe/sites/all/themes/pathe/styles/all-new.css?lsa00d");</style>
  <script type="text/javascript" src="/pathe/misc/jquery.js?v=1.4.4"></script>
<script type="text/javascript" src="/pathe/misc/jquery.once.js?v=1.2"></script>
<script type="text/javascript" src="/pathe/misc/drupal.js?lsa00d"></script>
<script type="text/javascript" src="/pathe/misc/jquery.cookie.js?v=1.0"></script>
<script type="text/javascript" src="/pathe/sites/default/files/languages/fr_0UGV_uzKTT5eWPAfJ8bAA-Fws0gPODV1lQJwOssMngA.js?lsa00d"></script>
<script type="text/javascript" src="http://cache.massmotionmedia.com/mmm/player/js/controller.js"></script>
<script type="text/javascript" src="./oahu-pathe.js"></script>
<script type="text/javascript" src="<?php echo $config["oahu_js_url"]; ?>"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
  var $ = jQuery;
	var oahuPathe;
	jQuery(document).ready(function() {
		oahuPathe = new OahuPathe("<?php echo $config['consumer_id']; ?>", "<?php echo currentUserId(); ?>", { environment: "<?php echo $config['environment']?>" });
	});
//--><!]]>
</script>
<script type="text/javascript" src="/pathe/modules/user/user.js?lsa00d"></script>
<script type="text/javascript" src="/pathe/sites/all/modules/field_group/field_group.js?lsa00d"></script>
<script type="text/javascript" src="/pathe/sites/all/themes/pathe/js/main.js?lsa00d"></script>
<script type="text/javascript" src="/pathe/sites/all/themes/pathe/js/swfobject.js?lsa00d"></script>
<script type="text/javascript" src="/pathe/sites/all/themes/pathe/js/pathePlayer.js?lsa00d"></script>
<script type="text/javascript" src="/pathe/sites/all/themes/pathe/js/tabs.js?lsa00d"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/pathe\/","pathPrefix":"","ajaxPageState":{"theme":"pathe","theme_token":"w5esvKZ0lyU8cODF0Uy3yofL_uCSpR4FNcc5EU9ov0A","js":{"misc\/jquery.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"misc\/jquery.cookie.js":1,"public:\/\/languages\/fr_0UGV_uzKTT5eWPAfJ8bAA-Fws0gPODV1lQJwOssMngA.js":1,"http:\/\/cache.massmotionmedia.com\/mmm\/player\/js\/controller.js":1,"https:\/\/raw.github.com\/jeremiepose\/Oahu\/master\/oahu-pathe.js":1,"http:\/\/js.oahu.neue.fr\/build\/oahu.js":1,"0":1,"modules\/user\/user.js":1,"sites\/all\/modules\/field_group\/field_group.js":1,"sites\/all\/themes\/pathe\/js\/main.js":1,"sites\/all\/themes\/pathe\/js\/swfobject.js":1,"sites\/all\/themes\/pathe\/js\/pathePlayer.js":1,"sites\/all\/themes\/pathe\/js\/tabs.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"modules\/field\/theme\/field.css":1,"sites\/all\/modules\/logintoboggan\/logintoboggan.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/date\/date_popup\/themes\/datepicker.1.7.css":1,"sites\/all\/modules\/field_group\/field_group.field_ui.css":1,"sites\/all\/modules\/field_group\/field_group.css":1,"sites\/all\/modules\/date\/date_api\/date.css":1,"sites\/all\/themes\/pathe\/styles\/custom.css":1,"sites\/all\/themes\/pathe\/styles\/all-new.css":1}},"password":{"strengthTitle":"S\u00e9curit\u00e9 du mot de passe\u00a0:","hasWeaknesses":"Pour renforcer la s\u00e9curit\u00e9 de votre mot de passe :","tooShort":"Saisissez au moins 6 caract\u00e8res","addLowerCase":"Ajoutez des lettres minuscules","addUpperCase":"Ajoutez des lettres majuscules","addNumbers":"Ajoutez des chiffres","addPunctuation":"Ajoutez des caract\u00e8res de ponctuation","sameAsUsername":"Le mot de passe doit \u00eatre diff\u00e9rent du nom d'utilisateur","confirmSuccess":"oui","confirmFailure":"non","weak":"Faible","fair":"Correct","good":"Bien","strong":"Fort","confirmTitle":"Concordance des mots de passe\u00a0:","username":""}});
//--><!]]>
</script>
</head>
<body class="html front not-logged-in no-sidebars page-node" >
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable">Aller au contenu principal</a>
  </div>
    <div id="wrapper">
<div class="vector">&nbsp;</div>
<div id="container" class="clearfix">
<div id="header"><strong class="logo"><a
	href="/pathe/">Pathe</a></strong> <div id="main-menu" class="navigation"><h2 class="element-invisible">Menu principal</h2><ul id="nav" class="links clearfix"><li class="menu-598 first active"><a href="/pathe/" title="" class="active">Films</a></li>
<li class="menu-599 active"><a href="/pathe/" title="" class="active">Bandes-annonces</a></li>
<li class="menu-600 last active"><a href="/pathe/" title="" class="active">Dvd-vod</a></li>
</ul></div>
<!-- /#main-menu --> <div class="search-block">
  <?php require('templates/oahu_box.php'); ?>
<!--<div class="button"><a href="#register2" class="link-popup"-->
<!--	id="sidentifier">S'identifier</a> / <a href="#signup"-->
<!--	class="link-popup" id="sinscrire">S'inscrire</a></div>-->
	<div class="buttonsidentifier" >
					<a href="#register2" class="link-popup" id="sidentifier">S'identifier</a>
				</div>
				<div class="buttonsinscrire" >
					<a href="#signup" class="link-popup" id="sinscrire">S'inscrire</a>
				</div><form action="/pathe/resultats" class="search-form" method="get">
<fieldset>
<div class="text"><input type="text" name="searchTerms" value="Recherche Pathé !" /></div>
<input class="submit" type="submit" title="search" value="search" /></fieldset>
</form>
</div>
</div>
<div id="center">
<div id="squeeze">
<div class="right-corner">
<div class="left-corner"><a id="main-content"></a>
<div class="clearfix">  <div class="region region-content">
    <div id="block-druplash-homepageblock" class="block block-druplash">

    
  <div class="content">
    <div class="gallery g0">
	<a href="#" class="link-prev">&lt;</a>
	<div class="frame">
		<ul>
							<li>
					<img src="/pathe/sites/default/files/styles/slideshow/public/slideshow/img-gallery.jpg" alt="images description" class="alignleft" width="732" height="360" />
					<div class="block">
						<h2>Switch</h2>
						<h3>En salles le <b>01 August 2011</b></h3>
						<p> avec Cast2 et Cast1</p>
						<ul class="topiclist">
							<li>
								<a class="link-popup" href="#player">Voir la bande-annonce</a>
							</li>
							<li>
								<a href="fichefilmGP.html" class="fiche">Voir la fiche</a>
							</li>
							<li>
								<a href="fichefilmGP.html #search" class="film">Je veux voir ce film</a>
							</li>
						</ul>
						<div class="social">
							<strong>Partager</strong>
							<ul>
								<li><a href="">facebook</a></li>
								<li><a href="" class="twitter">twitter</a></li>
								<li><a href="" class="youtube">youtube</a></li>
							</ul>
						</div>
					</div>
				</li>
					</ul>
	</div>
	<a href="#" class="link-next">&gt;</a>
	</div>
<div id="main">
	<div class="container">
		<div class="gallery g1">
			<h2>Films à l’affiche</h2>
			<div class="frame">
				<ul id="affiche_list">
					<li><ul class='affiche_list'>						<li style="position: relative">
							<a href="#">
	<img src="" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>13 janvier 2012</span></p><p style='margin-top: 10px;'>Un film de aucun<br/>Avec aucun			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
							<h3>mmtest1</h3>
						</li>
											<li style="position: relative">
							<a href="#">
	<img src="" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>21 décembre 2011</span></p><p style='margin-top: 10px;'>Un film de John Doe et John Doe<br/>Avec Jane Doe et Jane Doe			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
							<h3>Le roi du teflon</h3>
						</li>
					</li></ul><li><ul class='affiche_list'>						<li style="position: relative">
							<a href="#">
	<img src="/pathe/sites/default/files/styles/affiche_homepage/public/film/affiche/item2.jpg" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>23 août 2011</span></p><p style='margin-top: 10px;'>Un film de aucun<br/>Avec aucun			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
							<h3>titre 1</h3>
						</li>
											<li style="position: relative">
							<a href="#">
	<img src="/pathe/sites/default/files/styles/affiche_homepage/public/film/affiche/img3-1.jpg" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>23 août 2011</span></p><p style='margin-top: 10px;'>Un film de aucun<br/>Avec aucun			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
							<h3>titre DVD 1</h3>
						</li>
					</li></ul><li><ul class='affiche_list'>						<li style="position: relative">
							<a href="#">
	<img src="" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>1<sup style='font-size: 8px'>er</sup> janvier 1970</span></p><p style='margin-top: 10px;'>Un film de aucun<br/>Avec aucun			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
							<h3>Terminator Oahu</h3>
						</li>
											<li style="position: relative">
							<a href="#">
	<img src="" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>1<sup style='font-size: 8px'>er</sup> janvier 1970</span></p><p style='margin-top: 10px;'>Un film de aucun<br/>Avec aucun			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
							<h3>Drogué</h3>
						</li>
					</li></ul>				</ul>
			</div>
							<div class="switcher">
					<div class="holder">
						<a href="#" class="prev">&lt;</a>
						<div class="sw">
							<ul>
								<li class="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
							</ul>
						</div>
						<a href="#" class="next">&gt;</a>
					</div>
				</div>
					</div>
		<div class="focus">
		<h2>Focus DVD</h2>
			<div class="dvd_box">
		<a href="#">
	<img src="" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>1<sup style='font-size: 8px'>er</sup> août 2011</span></p><p style='margin-top: 10px;'>Un film de Real2 et Real1<br/>Avec Cast2 et Cast1			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
	</div>
	<div class="inner">
		<h4>Switch</h4>
		<p>Un film de Real2 et Real1 avec Cast2 et Cast1</p>
	</div>
		</div>
		<div class="aside">
			<h2>Fil d’actualités</h2>
			<div class="vscrollable">
				<div class="block">
					<a href="#" class="twit">Twitter</a>
					<div class="textholder">
						<p>8 Oscars® pour Slumdog Millionaire ! <a href="#">http://bit.ly/nnouHY</a></p>
						<em class="date">il y a 2 heures</em>
					</div>
				</div>
				<div class="block">
					<a href="#" class="twit">Twitter</a>
					<div class="textholder">
						<p>34e nuit des César : 3 récompenses pour MESRINE ! <a href="#">http://bit.ly/nnouHY</a></p>
						<em class="date">il y a 2 jours</em>
					</div>
				</div>
				<div class="block">
					<a href="#" class="facebook">Twitter</a>
					<div class="textholder">
						<p><strong>Pathé!</strong> 34e nuit des César : 3 récompenses pour MESRINE</p>
						<em class="date">il y a 3 jours</em>
					</div>
				</div>
				<div class="block">
					<a href="#" class="twit">Twitter</a>
					<div class="textholder">
						<p>8 Oscars® pour Slumdog Millionaire ! <a href="#">http://bit.ly/nnouHY</a></p>
						<em class="date">il y a 5 jours</em>
					</div>
				</div>
				<div class="block">
					<a href="#" class="facebook">Twitter</a>
					<div class="textholder">
						<p><strong>Pathé!</strong> Gagnez des places pour l’avant-première de LA PIEL QUE HABITO !</p>
						<em class="date">il y a 6 jours</em>
					</div>
				</div>
			</div>
			<div class="social">
				<strong>Suivre Pathé!</strong>
				<ul>
					<li><a href="#">facebook</a></li>
					<li><a href="#" class="twitter">twitter</a></li>
					<li><a href="#" class="yuotube">yuotube</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="gallery g2">
			<h2>DVD/VOD</h2>
			<div class="frame">
				<ul id="dvd_vod_list">
					<li><ul>						<li>
								<div class="dvd_box">
		<a href="#">
	<img src="" alt="images description"/>
</a>
<div class="onTop">
	<div class="innerTop">
		<table class="filmOveray">
		<tr>
		<td>
			<p class="title_overlay_film">
				En salles le <span>23 août 2011</span></p><p style='margin-top: 10px;'>Un film de aucun<br/>Avec aucun			</p>
		</td>
		</tr>
		<tr>
		<td style="height: 89px;">
			<ul class="topiclist">
				<li>
					<a href="#player" class="link-popup">Voir la bande-annonce</a>
				</li>
				<li>
					<a class="fiche" href="fichefilmGP.html">Voir la fiche</a>
				</li>
				<li>
					<a class="film" href="fichefilmGP.html #search">Je veux voir ce film</a>
				</li>
			</ul>
		</td>
		</tr>
		<tr>
		<td style="height: 32px;">
			<div class="social">
				<strong>Partager</strong>
				<ul>
					<li><a href="">facebook</a></li>
					<li><a class="twitter" href="">twitter</a></li>
					<li><a class="youtube" href="">youtube</a></li>
				</ul>
			</div>
		</td>
		</tr>
		</table>
	</div>
</div>
	</div>
	<div class="inner">
		<h4>titre DVD 1</h4>
		<p></p>
	</div>
						</li>
					</li></ul>				</ul>
			</div>
					</div>
		<div class="aside">
			<div class="visual">
								<a href="http://www.google.com">
					<img src="/pathe/sites/default/files/styles/bloc_promo/public/film/jaquette/Tulips-1.jpg"/>
				</a>
			</div>
		</div>
	</div>
	<div class="section">
		<h2>Films à venir</h2>
		<div class="holder">
			<ul class="av_list">
							</ul>
							<div class="mail-replace">
					<a href="http://www.google.fr">
						<img src="/pathe/sites/default/files/styles/bloc_promo_mini/public/film/jaquette/Tulips-2.jpg"/>
					</a>
				</div>
					</div>
	</div>
	<div class="section add">
		<ul class="social-list">
			<li>
				<a href="#">
					<img src="/pathe/sites/all/custom/images/facebook.gif" alt="facebook" width="162" height="80" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="/pathe/sites/all/custom/images/twitter.gif" alt="twitter" width="162" height="80" />
				</a>
			</li>
			<li>
				<a href="#">
					<img src="/pathe/sites/all/custom/images/css.gif" alt="yuotube" width="162" height="80" />
				</a>
			</li>
		</ul>
				<div class="phone-block">
			<a href="http://www.google.com">
				<img src="/pathe/sites/default/files/styles/bloc_promo_footer/public/image_promo_footer/social.png"/>
			</a>
		</div>
	</div>
</div>  </div>
</div>
<div id="first-time"><p>Aucun contenu de page d'accueil n'a été créé pour l'instant.</p></div>  </div>
</div>
</div>
</div>
</div>
</div>
<!-- /.left-corner, /.right-corner, /#squeeze, /#center --></div>
<!-- /#container --></div>
<!-- /#wrapper -->
<div id="footer">
<div class="holder">
<div class="bar"><strong class="logo"><a href="#">Pathe</a></strong>
<div class="search-block"><a href="#" class="button">S'identifier /
S'inscrire</a>
<form action="#" class="search-form">
<fieldset>
<div class="text"><input type="text" value="Recherche Pathé !" /></div>
<input class="submit" type="submit" title="search" value="search" /></fieldset>
</form>
</div>
</div>
<ul class="navigation">
	<li><span>navigation :</span> <ul class="links"><li class="menu-602 first active"><a href="/pathe/" title="" class="active">Films</a></li>
<li class="menu-603 active"><a href="/pathe/" title="" class="active">Bandes-annonces</a></li>
<li class="menu-604 last active"><a href="/pathe/" title="" class="active">Dvd-vod</a></li>
</ul></li>
	<li><span>Social :</span> <ul class="links"><li class="menu-606 first active"><a href="/pathe/" title="" class="active">Facebook</a></li>
<li class="menu-607 active"><a href="/pathe/" title="" class="active">Twitter</a></li>
<li class="menu-608 active"><a href="/pathe/" title="" class="active">Youtube</a></li>
<li class="menu-609 last active"><a href="/pathe/" title="" class="active">Newsletter</a></li>
</ul></li>
	<li><span>MISC. :</span> <ul class="links"><li class="menu-611 first active"><a href="/pathe/" title="" class="active">Jeux-Concours</a></li>
<li class="menu-612 active"><a href="/pathe/" title="" class="active">Résultats Jeux Concours</a></li>
<li class="menu-613 active"><a href="/pathe/" title="" class="active">FAQ</a></li>
<li class="menu-614 last active"><a href="/pathe/" title="" class="active">Contact</a></li>
</ul></li>
</ul>
	<ul class="add-nav"><li class="menu-616 first active"><a href="/pathe/" title="" class="active">pathe.uk</a></li>
<li class="menu-617 active"><a href="/pathe/" title="" class="active">pathe.nl</a></li>
<li class="menu-618 active"><a href="/pathe/" title="" class="active">pathe.ch</a></li>
<li class="menu-619 active"><a href="/pathe/" title="" class="active">pathe.it</a></li>
<li class="menu-620 active"><a href="/pathe/" title="" class="active">Pathé international</a></li>
<li class="menu-621 active"><a href="/pathe/" title="" class="active">Gaumont-Parthé archives</a></li>
<li class="menu-622 active"><a href="/pathe/" title="" class="active">Boutique MOD Pathé</a></li>
<li class="menu-623 active"><a href="/pathe/" title="" class="active">cinémas Gaumont-Pathé</a></li>
<li class="menu-624 last active"><a href="/pathe/" title="" class="active">Fondation J.SEYDOUX</a></li>
</ul><div class="copyright"><span>Copyright &copy; 2011 Path� ! Films Tous
droits r�serv�s</span> <ul class="links"><li class="menu-630 first active"><a href="/pathe/" title="" class="active">Conditions générales</a></li>
<li class="menu-631 active"><a href="/pathe/" title="" class="active">crédits</a></li>
<li class="menu-632 last active"><a href="/pathe/" title="" class="active">mentions légales</a></li>
</ul></div>
</div>
</div>
<div class="account">
<div class="popup register" id="register2">
<div class="heading"><a href="#" class="close">Fermer</a> <strong
	class="title">Identification</strong></div>
<div class="columns">
<div class="column"><strong class="title">utilisateur facebook ou
twitter ?</strong> <em class="use-account">Vous pouvez utiliser vos
comptes Facebook ou twitter pour vous inscrire sur <a href="#">pathefilms.com</a></em>
<ul class="social-buttons">
	<li><a href="#"><strong>Connect</strong> with <strong>Facebook</strong></a></li>
	<li><a class="twitter" href="#">Connectez-vous avec Twitter</a></li>
</ul>
</div>
<div class="column"><strong class="title">Je M'indentifie via path?</strong>
  <div class="region region-popuplogin">
    <form action="/pathe/node?destination=node" method="post" id="user-login-form" accept-charset="UTF-8"><div><div class="form-item row form-type-textfield form-item-name">
  <label for="edit-name--2">Username or e-mail <span class="form-required" title="Ce champ est obligatoire.">*</span></label>
 <div class="text"><input type="text" id="edit-name--2" name="name" value="" size="15" maxlength="60" class="form-text required" /></div>
</div>
<div class="form-item row form-type-password form-item-pass">
  <label for="edit-pass--2">Mot de passe <span class="form-required" title="Ce champ est obligatoire.">*</span></label>
 <div class="text"><input type="password" id="edit-pass--2" name="pass" size="15" maxlength="60" class="form-text required" /></div>
</div>
<input type="hidden" name="form_build_id" value="form-aghXicYF-IrHLcRI8Gur5xvkrbBFRwZhFy0srC_3fpM" />
<input type="hidden" name="form_id" value="user_login_block" />
<div class="form-actions form-wrapper" id="edit-actions--2"><button type="submit" name="op" id="edit-submit--2" value="Se connecter"  type="submit" id="edit-submit--2" name="op" value="Se connecter" class="form-submit btn-register" >Se connecter</button></div></div></form>  </div>
</div>
</div>
</div>
</div>
<div class="account">
<div class="popup register" id="signup">
<div class="heading"><a href="#" class="close">Fermer</a> <strong
	class="title">Inscription</strong></div>
<div class="columns">
<div class="column"><strong class="title">utilisateur facebook ou
twitter ?</strong> <em class="use-account">Vous pouvez utiliser vos
comptes Facebook ou twitter pour vous inscrire sur <a href="#">pathefilms.com</a></em>
<ul class="social-buttons">
	<li><a href="#"><strong>Connect</strong> with <strong>Facebook</strong></a></li>
	<li><a class="twitter" href="#">Connectez-vous avec Twitter</a></li>
</ul>
</div>
<div class="column"><strong class="title">Inscrivez-vous uniquement sous
path?</strong> <form class="user-info-from-cookie" enctype="multipart/form-data" action="/pathe/" method="post" id="user-register-form" accept-charset="UTF-8"><div><input type="hidden" name="form_build_id" value="form-dpKmoZpAM9eV7zUgzeLIiw28bXzQgN4xCUqhD15bhR0" />
<input type="hidden" name="form_id" value="user_register_form" />
<input class="username" type="hidden" name="name" value="cbqVtxYwHj" />
<div class="form-item row form-type-textfield form-item-mail">
  <label for="edit-mail">Courriel <span class="form-required" title="Ce champ est obligatoire.">*</span></label>
 <div class="text"><input type="text" id="edit-mail" name="mail" value="" size="60" maxlength="254" class="form-text required" /></div>
</div>
<div class="form-item row form-type-password-confirm form-item-pass">
 <div class="form-item row form-type-password form-item-pass-pass1">
  <label for="edit-pass-pass1">Mot de passe <span class="form-required" title="Ce champ est obligatoire.">*</span></label>
 <div class="text"><input class="password-field form-text required" type="password" id="edit-pass-pass1" name="pass[pass1]" size="25" maxlength="128" /></div>
</div>
<div class="form-item row form-type-password form-item-pass-pass2">
  <label for="edit-pass-pass2">Confirmer le mot de passe <span class="form-required" title="Ce champ est obligatoire.">*</span></label>
 <div class="text"><input class="password-confirm form-text required" type="password" id="edit-pass-pass2" name="pass[pass2]" size="25" maxlength="128" /></div>
</div>

</div>
<input type="hidden" name="timezone" value="Europe/Paris" />
<div class="form-actions form-wrapper" id="edit-actions--3"><button type="submit" name="op" id="edit-submit--3" value="Créer un nouveau compte"  type="submit" id="edit-submit--3" name="op" value="Créer un nouveau compte" class="form-submit btn-register" >Créer un nouveau compte</button></div></div></form></div>
</div>
</div>
</div>
  </body>
</html>
