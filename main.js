$( document ).ready(function() {


  var images = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg']
  var index = Math.floor(Math.random()*images.length)


  // $('.photo').attr('src', images[index]);

  function nextCarouselImage() {
    console.log("next clicked");

    index=index+1;
    if (index > images.length - 1){
      index = 0
    }
    console.log(index);
    $('.photo').attr('style', 'background-image: url(' + images[index] + ')');
    console.log($('.photo').attr('style'))
  }

  function prevCarouselImage() {
    index=index-1;
    if(index < 0){
      index = images.length - 1
    }
    $('.photo').attr('src', images[index])
  }


  $('#next-button').click(nextCarouselImage)

  $('#previous-button').click(prevCarouselImage)
  setInterval(nextCarouselImage, 5000)

  $(".hamburger").click(function(e) {
    $(".menu" ).slideToggle("slow");
  });
})
