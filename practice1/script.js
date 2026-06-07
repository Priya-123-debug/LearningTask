let picker =document.querySelector("#colorpicker");
let text=document.querySelector(".text");
let togglebtn=document.querySelector(".toggle");
picker.addEventListener("input",function(e){
	      text.style.color=picker.value ;
})
document.querySelectorAll("button").forEach((btn)=>{
	btn.addEventListener("click",function(e){
		text.style.color=btn.dataset.color;
	})

});
let dark=false;
togglebtn.addEventListener("click",function(e){
	if(dark){
		document.body.style.backgroundColor="white";
		document.body.style.color="black";
		 togglebtn.textContent = "🌙 Dark Mode";
		dark=false;
	}
	else{
			document.body.style.backgroundColor="black";
		document.body.style.color="white";
		togglebtn.textContent = "☀️ Light Mode";
		dark=true;
	}
})
  let slider=document.querySelector("#fontSlider");
	slider.addEventListener("input",function(e){
	text.style.fontSize=slider.value+"px";
})
let message=document.querySelector("#message");
let count=document.querySelector("#count");
message.addEventListener("input",function(e){

	count.textContent=message.value.trim().split(" ").length;


})
const password = document.querySelector("#password");

const strength = document.querySelector("#strength");
password.addEventListener("input",(e)=>{
	
	const value=password.value;
	const hasUpper = /[A-Z]/.test(value);

const hasLower = /[a-z]/.test(value);

const hasNumber = /[0-9]/.test(value);

const hasSpecial = /[!@#$%^&*]/.test(value);
if(
   value.length >= 8 &&
   hasUpper &&
   hasLower &&
   hasNumber &&
   hasSpecial
){
   strength.textContent = "Strong";
	 strength.style.color="green";
}
else{
   strength.textContent = "Weak";
	 strength.style.color="red";
}



})


// todo app
const input = document.querySelector("#todo");

const addBtn = document.querySelector("#addBtn");
const alldel = document.querySelector("#delBtn");

const list = document.querySelector("ul");
addBtn.addEventListener("click", () => {
     const value=input.value;
		 if(value.trim() === ""){
    return;
}
		 const newli=document.createElement("li");
		 const delBtn = document.createElement("button");
		 delBtn.textContent = "Delete";
		 newli.textContent=value;
		 newli.appendChild(delBtn);
		 delBtn.addEventListener("click",()=>{
	newli.remove();


})
		 list.appendChild(newli);
		 input.value = "";
		  newli.addEventListener("click", () => {

    if(newli.style.textDecoration === "line-through"){
        newli.style.textDecoration = "none";
    }
    else{
        newli.style.textDecoration = "line-through";
    }

});
});

