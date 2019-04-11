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
        .attr('href', href + 'assets/css/jquery-ui.css'));    
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', '//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css'));
$('head')
    .append($('<link rel="stylesheet" type="text/css" />')
        .attr('href', href + 'assets/css/timecalc.css'));








