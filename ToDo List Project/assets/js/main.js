//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete ToDo
$('ul').on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var nextTodo = $(this).val();
        $(this).val("");
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + nextTodo + "</li>");
	}
});

$('#toggleForm').click(function(){
	$("input[type='text']").fadeToggle();
});