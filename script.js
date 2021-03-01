function ask(){

name = prompt("Name?");
  
    if(name != null && isNaN(name) & name != ""){
  	    document.write("<h1>Moin " + name + "</h1>");
    }else{
      alert("Nein!")
      ask();
    }
}

ask();