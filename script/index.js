$(function() {
	var headerH = $("header").innerHeight();
	var navH = $("nav").innerHeight();
	var windowH = $(window).height();

	$(".slider").height(windowH - (headerH + navH));
	$(".carousel-item").height(windowH - (headerH + navH));
	$(".overlay").height(windowH - (headerH + navH)),
    $(".carousel-inner").height(windowH - (headerH + navH));
    // $(".choose").height(windowH );
    // $(".choose-item1").height(windowH );
    // $(".choose-item2").height(windowH );
    
});

var filterItem = document.querySelectorAll(".filter-item"),
	filterImg = document.querySelectorAll(".filter-img"),
	i,x,c1,c2,	z;

for (i = 0; i < filterItem.length; i++) {
	filterItem[i].onclick = function() {
	
		for (i = 0; i < filterItem.length; i++) {
			filterItem[i].classList.remove("filter-active");
		}
		this.classList.remove("filter-item-hover");
		this.classList.add("filter-active");
	};
}

for (x = 0; x < filterItem.length; x++) {
	if (x == 0) {
        var r;
        filterItem[x].onmousedown = function() {
		for (r = 0; r < filterImg.length; r++) {
            filterImg[r].classList.add("not-none");
            console.log("hh")
		}}
    }
     else if (x >= 1) {
		filterItem[x].onmousedown = function() {
			console.log("d11");
			c1 = this.getAttribute("name");
			console.log(c1);
			for (x = 0; x < filterImg.length; x++) {
				c2 = filterImg[x].getAttribute("name");
				filterImg[x].classList.remove("not-none");
				filterImg[x].classList.add("none");

				if (c1 == c2) {
					filterImg[x].classList.remove("none");

					filterImg[x].classList.add("not-none");
				}
			}
		}
	}
}


// var scroll = document.documentElement.scrollTop, 
//     counterX,c,
//     count = document.querySelectorAll(".counter"),
//      attr1 ;


//     function counter(){

//         if(scroll>=3000){
//             console.log("counterX");

//                 // for(counterX = 0 ; counterX < ; counterX++)
//                 for(c = 1 ; c < count.length ; c++){
//                   attr1 = count[c].getAttribute('value');
//                   attr = +(attr1);
//                   for(counterX = 0 ; counterX < attr ; counterX++){

//                       count[c].textContent=counterX;
//                       console.log(counterX)
//                   }
//                     console.log(attr +"type = " +typeof(attr))
//                 }
//             }

// setTimeout("counter()", 0.1);
//     // if(scroll==4788){
//     //     for(counterX = 0 ; counterX < )
//     // }
// }

// counter();
