let Seconds = document.getElementById("secs")
let image=document.getElementById("img")
let body1=document.getElementById("body1");


let i=10;
let updateTimer=()=>{
    
    i--;

    let j=i;

    if(j<10){

        j=0+""+j;
        Seconds.innerHTML=j  
    }else{
        Seconds.innerHTML=j;
    }

    if(i==0){
        img.src="/Images/Nature2.jpg"
        // body1.style.backgroundColor="red";
        clearInterval(id);
        


    }
}

 let id=setInterval(updateTimer,1000);