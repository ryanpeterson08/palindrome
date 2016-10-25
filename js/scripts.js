
var palindrome = function(text){

	var textArray = text.toLowerCase().split("");
  var noSpaces = textArray.filter(function (value){
  	return value != " ";
  });

  var flipArray = noSpaces.slice().reverse();

  for(var x = 0; x <= textArray.length - 1; x++){
  	if(noSpaces[x] != flipArray[x]){
    	return false;
    }
  }
  return true
}

$(document).ready(function (){
  $("#palindrome").submit(function(event){
    if (palindrome($("#sentence").val())){
      $("#answer").text("This is a palindrome");
    }
		else{
			$("#answer").text("This is not a palindrome");
		}
		$("img").fadeIn('slow');
		$("#thanks").fadeIn('slow');
    event.preventDefault();
  })

});
