// function used to toggle the edit options for a comment


// below does not work when deployed to heroku because 'let' is not valid
// window.onload = function(){
// 	var editComment = document.getElementsByClassName('edit_comment')
// 	var editor = document.getElementsByClassName("editor")

// 	for(let i=0;i<editor.length;i++){
// 		editor[i].addEventListener('click', function(event){
// 			showForm(i)
// 		})
// 	}

// 	function showForm(x){
// 		event.preventDefault()
// 		editComment[x].style.display = "block";
// 	}

// }

//below works execpt for that once you hit edit on a comment you cannot activate it again unless you hard restart the page
//bug fix is in the works

$(document).ready(function() {
   $(".editor").click(function(event){
   	event.preventDefault()
     $(".editor").siblings(".edit_comment").toggle();
 	});
});


// alternative syntax:

// $(document).ready(function(){
//  	$(".editor").click(function(event){
//  		event.stopPropagation()
//  		if($(".edit_comment").css("display") == "none"){	
//  			$(".editor").siblings(".edit_comment").css("display","block")}	
//  		else {
//  			$(".editor").siblings(".edit_comment").css("display","none")}
//  	}

//  )})

