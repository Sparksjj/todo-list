$("document").ready(function(){


$("#addtodo").on("click", function(){
	var text = $("#addinput").val();

	if(!text){
		return;
	}

	drowList(text);
	drowListHead();
})

$("ul").on("click", "input",  function(){
	drowListStyle(this);
	drowListHead();
})

$("h4 a").on("click", function(){
	var removedElements = $("input:checked").parent().remove();
	drowListHead();
	drowTable(removedElements);
})

function drowList(text){
	$("<li>", {
		text: " "+text,
	}).prepend($("<input type='checkbox'>"))
	.appendTo("ul");
}

function drowListHead(){
	//console.log($("input:checked").val())
	var countTodo = $("ul li").length;
	var countDid = $("input:checked").length;
	$('h4 span').text(countDid + " of " + countTodo);
};

function drowListStyle(element){
	$(element).parent().toggleClass("done")
}

function drowTable(elements){
	elements.each(function(){
		elements = elements.children().remove();
		var text = this.innerHTML;		
		var date = new Date();
		var rows = $("table tr");
		$("<tr>")
				.append($("<td>" +text+ "</td>"))
				.append($("<td>" +date+ "</td>"))
				.insertAfter("table tr:first");
		if(rows.length>10){
			rows.eq(11).remove();
		}
	})
}

})