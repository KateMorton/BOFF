//smooth transition for scrollspy  
   
$('body').scrollspy({target: ".nav", offset: 50});

// Add smooth scrolling on all links inside the navbar
$(".nav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

//Scroll to top button functionality

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

 //When the user clicks on the button, scroll to the top of the document
function topFunction() {
   // document.body.scrollTop = 0;
   // document.documentElement.scrollTop = 0;
    $('html, body').animate({
      scrollTop: $('.navbar').offset().top
    }, 1000);

}

//close modal and scroll to ticket registration.

function modalClose() {
     $('.modal').modal('hide');
     $('html, body').animate({
        scrollTop: $("#registration").offset().top
    }, 2000);
}

    