document.querySelector("#grandparent").addEventListener("click", ()=>{
    console.log("Grandparent clicked");
    document.querySelector("#log").innerText += "Grandparent clicked\n";
},false)
document.querySelector("#parent").addEventListener("click", ()=>{
    console.log("Parent clicked");
    document.querySelector("#log").innerText += "Parent clicked\n";
},false)
document.querySelector("#child").addEventListener("click", ()=>{
    console.log("Child clicked");
    document.querySelector("#log").innerText += "Child clicked\n";
},false)  
document.querySelector("#clear").addEventListener("click", ()=>{      
    document.querySelector("#log").innerText = "";
})  