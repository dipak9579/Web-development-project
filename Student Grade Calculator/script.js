
let calculate=()=>{
    let math=document.getElementById("math").value;
    let sci=document.getElementById("sci").value;
    let marathi=document.getElementById("marathi").value;
    let hindi=document.getElementById("hindi").value;
    let grades="";

    let marks=parseFloat(math)+parseFloat(sci)+parseFloat(marathi)+parseFloat(hindi);

    let percentage=(marks/400)*100;

    if(percentage<=100&&percentage>=80){
        grades="A"
    }
    else if(percentage<80&&percentage>=60){
        grades="B"
    }
    else if(percentage<60&&percentage>=40){
        grades="C"
    }
    else{
        grades="F"
    }

 let btn=document.getElementById("showData");

 if(math==""||sci==""||marathi==""||hindi==""){
    btn.innerHTML="Please enter all the fields"
 }else if(grades=="F"){
    btn.innerHTML=`You are fail. Grade is ${grades} and Percentage is ${percentage.toFixed(2)}`
}
else{
    btn.innerHTML=`Your Grade is ${grades} and Percentage is ${percentage.toFixed(2)}`;
  
 }

}
