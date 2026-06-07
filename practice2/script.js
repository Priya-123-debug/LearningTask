let list =document.querySelector("#list");
let input=document.querySelector("#input");
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple"
];
function display(arr){
	list.innerHTML="";
	arr.forEach(fruit => {
		let li=document.createElement("li");
		li.textContent=fruit;
		list.appendChild(li);

		
	});
}
display(fruits);
input.addEventListener("input",function(e){
         const value=input.value;
				 const filtered=fruits.filter((e)=>{
					return e.toLowerCase().includes(value.toLowerCase());
				 });
				 display(filtered);
}

)
// expense tracker 
let tracker=document.querySelector("#track");
let amount=document.querySelector("#amount");
let show=document.querySelector("#show");
let list1 =document.querySelector("#list1");
const expense=[];
const addBtn = document.querySelector("#addBtn");
function displaying(){
	list1.innerHTML="";

	expense.forEach((e)=>{
			let li=document.createElement("li");
		li.textContent=`${e.name}:${e.amount}`;
		 
		list1.appendChild(li);
		let total=0;
		expense.forEach((e)=>{
			total+=e.amount;
		});
		show.textContent=total;

		

	})


}
addBtn.addEventListener("click",function(e){
	console.log("Button clicked");
	const value=tracker.value;
	const paisa=amount.value;
	if(value.trim()==""||paisa.trim()=="") return;
	expense.push({
		name:value,
		amount:Number(paisa)
	});
	displaying();
	tracker.value="";
	amount.value="";


})

