function bullying (name){
if(name == "Rakib"  ){
    console.log ( "Your Name is : (" , name ,  ") is  (Bad Name) For This incomplete society ");
}
else if(name == "Karim"){
    console.log ( "Your Name is : (" , name ,  ") is  (Bad Name) For This incomplete society ");
}
else if(name == "Rayhan"){
    console.log ( "Your Name is : (" , name ,  ") is  (Bad Name) For This incomplete society ");
}
else if(name == "Zihad"){
    console.log ( "Your Name is : (" , name ,  ") is  (Bad Name) For This incomplete society ");
}
else if(name == "Rofiq"){
    console.log ( "Your Name is : (" , name ,  ") is  (Bad Name) For This incomplete society ");
}
else if(name == "Ahad"){
    console.log ( "Your Name is : (" , name ,  ") is  (Bad Name) For This incomplete society ");
}
else{
    console.log ( "Your Name is : (" , name ,  ") is  (Good Name) For This society ");
}
}


bullying("Karim");
bullying("Kayhan");
bullying("Ahad");
bullying("Zihad");
bullying("Rofiq");
bullying("Shimu");






const goodName =["Eti","naima","rafa","shibu","piplu","urme"]; 
const bullyName = ["Rayhan","Karim","Rakib","Zihad","Ahad","Sofiq"];
function bullying (name){
    for(let i = 0; i<name.length; i++){
        const box = i;
        const store = name[box];
        console.log(store);
        if(store === "Rayhan"){
            console.log ( "Your Name is : (" , store ,  ") is  (Bad Name) For This incomplete society ");

        }
        else if(store === "karim"){
            console.log ( "Your Name is : (" , store ,  ") is  (Bad Name) For This incomplete society ");
        }
        else if(store === "Rakib"){
            console.log ( "Your Name is : (" , store ,  ") is  (Bad Name) For This incomplete society ");
        }
       
        else if(store === "Zihad"){
            console.log ( "Your Name is : (" , store ,  ") is  (Bad Name) For This incomplete society ");
        }
        else if(store === "Ahad"){
            console.log ( "Your Name is : (" , store ,  ") is  (Bad Name) For This incomplete society ");
        }
        else if(store === "Sofiq"){
            console.log ( "Your Name is : (" , store ,  ") is  (Bad Name) For This incomplete society ");
        }
        
       else{
        console.log ( "Your Name is : (" , store ,  ") is  ( Good Name) For This incomplete society ");
       }
    }
return name;
}
bullying(bullyName);
bullying(goodName);
