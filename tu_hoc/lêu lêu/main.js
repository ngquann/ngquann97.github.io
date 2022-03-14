$(document).ready(function(){
    //Quotes/Image Array
    var quotes = [
        { quote: "Quote1", img: "https://s-media-cache-ak0.pinimg.com/564x/2a/b4/e7/2ab4e74ad637f9c8ecb792b8b7d605a6.jpg"},
        { quote: "Quote2", img: "https://s-media-cache-ak0.pinimg.com/564x/af/52/03/af5203d09a0be9c9e655786c88c1d8b7.jpg"},
        { quote: "Quote3", img: "https://s-media-cache-ak0.pinimg.com/564x/04/37/3c/04373c4f98797b202d13b9882e137690.jpg"}
    ];
  
    $("img").click(function(){
  
        var img = $("#MainProductImage"),
            //We look for the next quote, if it's the last we go to the beginning
            currentQuote = img.data("current-quote") === quotes.length -1 ? 0 : img.data("current-quote") + 1,
            nextQuote = quotes[currentQuote];
  
        //Set the current quote index in a data attribute
        img.data("current-quote", currentQuote);
        $("h1").fadeOut(0); 
        //Change the text
        $("h1").text(nextQuote.quote);
        //Change the image
        img.attr("src", nextQuote.img);
    });
  });