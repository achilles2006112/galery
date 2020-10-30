window.addEventListener("load",function(){
	var img = document.querySelector("#photo");
	var btnf = document.querySelector("#forward"); 
	var btnb = document.querySelector("#back");
	var list2 = document.querySelector("#category");
	var category = "boys/";
	var counter = 1;
	list2.addEventListener("change", function(){
			category = this.value + "/";
			counter = 1; 
			img.src = "images/" + category + counter + ".jpg";
	});
	btnf.addEventListener("click",function(){
		counter++;
		if(counter>4){
			counter=1;			
		}
		img.src = "images/"+category+"/"+counter+".jpg";
		
	});
	
	btnb.addEventListener("click",function(){
		//ssss//
		counter--;
		if(counter<1){
			counter = 4;
		}
		img.src = "images/"+category+"/"+counter+".jpg";
	});
	
});