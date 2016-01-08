var images = ['../Girlenes/images/pic1.jpg', '../Girlenes/images/pic2.jpg', '../Girlenes/images/pic3.jpg', '../Girlenes/images/pic4.jpg']

var index = 0
$('#next-button').click(function() {
  index=index+1
$('img').attr('src', images[index])
})

$('#previous-button').click(function() {
  index=index-1
$('img').attr('src', images[index])
})

$(".hamburger").click(function(e) {
	$(".menu" ).slideToggle("slow");
});