let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#resetbutton");


let player0 = true;

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box click");
        if(player0){

            box.innerHTML="O";
            player0=false;
            console.log('palyer0');
            
        }
        else{
            box.innerHTML="X";
            player0=true;
            console.log('palyer1');
            
        }
        box.dispatchEvent = true;
    })
})