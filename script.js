function ask(){

name = prompt("Name?");
  
    if(name != null && isNaN(name) & name != ""){
  	    document.write("Moin ", name);
    }else{
      alert("Nein!")
      ask();
    }
}

ask();