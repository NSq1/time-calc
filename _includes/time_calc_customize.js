var href = $(location).attr("href");
if (href.indexOf('127.0.0.1') > 0) {
    href = href.substr(0, href.lastIndexOf(':4000')) + ':4000/';
} else {
    href = href.substr(0, href.lastIndexOf('/time-calc/')) + '/time-calc/';
}
var js = { timecalc : href + "assets/js/timecalc.js"
}
for (var library in js){
	$.getScript(js[library]);
	if (console!==undefined){
		console.log(js[library]);
	}	
}
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', href + 'assets/css/timecalc.css'));
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', href + 'assets/css/jquery-ui.css'));    
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', '//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css'));