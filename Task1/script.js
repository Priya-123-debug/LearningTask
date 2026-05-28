let links=document.querySelectorAll("a");
console.log(links);
links.forEach(function(link){
	link.addEventListener("click",()=>{
		alert("it is not made it will be active later");
	});
});