//alert('hello ' + document.location.href);

var numMaxPaginas = parseInt(document.getElementById('pageNumber').getAttribute('max'));
// PAGINA ATUAL document.querySelectorAll("[data-page-number]")[0].getAttribute('data-page-number');
//document.querySelectorAll('[data-page-number]').textContent;

var d = "";
var i = 1;

/* 
while (i <= numMaxPaginas ) {
	// statement
	var c = document.getElementById("page"+i);
	if (c == null) {
		document.getElementById('next').click();
	}else {
		d += "<img src='"+c.toDataURL("image/png")+"' alt='from canvas'/>" ;	
		console.log(c)
		 
	}
	i++;
}*/


var seconds = 0;
function incrementSeconds() {
    seconds += 1;
    	document.getElementById('next').click();
    	setTimeout(function(){
		var c = document.getElementById("page"+seconds);
    		d += "<img src='"+c.toDataURL("image/png")+"' alt='from canvas'/>" ;	
		console.log(c)

    	}, 1000);



    if (seconds == numMaxPaginas) {
    	var w=window.open('about:blank','image from canvas');
		w.document.write(d);

    }
    
}

var cancel = setInterval(incrementSeconds, 1500);



/*
	
var w=window.open('about:blank','image from canvas');
w.document.write(d);


 */


 
	

/*

var c=document.getElementById("page1");
var d=c.toDataURL("image/png");

console.log(d)
var w=window.open('about:blank','image from canvas');
w.document.write("<img src='"+d+"' alt='from canvas'/>");
*/