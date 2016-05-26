<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" lang="fr">
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" lang="fr">
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html lang="fr">
<!--<![endif]-->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="apple-touch-icon" sizes="57x57" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/wp-content/themes/arbre-integral/img/favicon/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/wp-content/themes/arbre-integral/img/favicon/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/wp-content/themes/arbre-integral/img/favicon/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/wp-content/themes/arbre-integral/img/favicon/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/wp-content/themes/arbre-integral/img/favicon/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="/wp-content/themes/arbre-integral/img/favicon/manifest.json">
	<link rel="mask-icon" href="/wp-content/themes/arbre-integral/img/favicon/safari-pinned-tab.svg" color="#000000">
	<link rel="shortcut icon" href="/wp-content/themes/arbre-integral/img/favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-TileImage" content="/wp-content/themes/arbre-integral/img/favicon/mstile-144x144.png">
	<meta name="msapplication-config" content="/wp-content/themes/arbre-integral/img/favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

	<!-- Twitter card. Only if twitter account is created. See https://dev.twitter.com/cards/overview -->
	<!--
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="">
	<meta name="twitter:title" content="">
	<meta name="twitter:description" content="">
	<meta name="twitter:creator" content="">
	<meta name="twitter:image:src" content="">
	<meta name="twitter:domain" content="">
	-->

	<!-- Facebook Open Graph tags. See https://developers.facebook.com/docs/sharing/webmasters -->
	<meta name="og:title" content="L'Arbre Intégral">
	<meta property="og:type" content="website">
	<meta property="og:url" content="http://arbre-integral.net">
	<meta property="og:image" content="http://arbre-integral.net/wp-content/themes/arbre-integral/img/assets/graineai-fb.png">
  <meta property="og:image-width" content="1200">
  <meta property="og:image-height" content="630">
	<meta property="og:locale:locale" content="fr_fr">

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Asap|Crimson+Text|Kite+One|Sanchez">
  <link rel="stylesheet" href='/wp-content/themes/arbre-integral/css/main.css' type='text/css'>

	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>

<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];

  //CNIL : non prorogation des cookies (cf. https://www.cnil.fr/sites/default/files/typo/document/Configuration_piwik.pdf)
  _paq.push([function() { 
  var self = this; 
  function getOriginalVisitorCookieTimeout() { 
         var now = new Date(), 
         nowTs = Math.round(now.getTime() / 1000), 
         visitorInfo = self.getVisitorInfo(); 
         var createTs = parseInt(visitorInfo[2]); 
         var cookieTimeout = 33696000; // 13 mois en secondes 
         var originalTimeout = createTs + cookieTimeout -
   nowTs; 
         return originalTimeout; 
   } 
   this.setVisitorCookieTimeout( getOriginalVisitorCookieTimeout() ); 
   }]);

  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//arbre-integral.net/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 1]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//arbre-integral.net/piwik/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->

</head>

<body>
