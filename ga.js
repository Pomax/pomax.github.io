(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-69475841-1', 'auto');

// 1) general pageview count
ga('send', 'pageview');

// 2) also, if a specific page is being visited, which one?
var hash = window.location.hash;
if (!!hash) { ga('send','event','page','request',hash,{ nonInteraction: true }); }
