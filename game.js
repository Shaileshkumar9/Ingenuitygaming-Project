//DOM selector
var h1=document.querySelector('h1');
var startermole=document.querySelector('#mole');
var starterdirt=document.querySelector('#mud');
var startbtn=document.querySelector("#start");
var points=document.querySelector(".points");
var dirt=document.querySelectorAll(".dirt");
var mole=document.querySelectorAll(".mole");
var p=0;


function start()
{
    h1.style.visibility="hidden";
    startermole.style.visibility="hidden";
    starterdirt.style.visibility="hidden";
    startbtn.style.visibility="hidden";
    points.style.visibility="visible";
    dirt[0].style.visibility="visible";
     for(var i=0;i<6;i++)
     {
        dirt[i].style.visibility="visible";   
     }
    //  for(var j=0;j<6;j++)
    //  {
    //  const random = Math.floor(Math.random() * 6) + 1;
     
    //  mole[random].style.visibility="visible";
     
    //  mole[random].style.visibility="hidden";

    //  console.log(random);
    //  }
   //  mole[0].style.visibility="visible";
   setInterval(visi,1000);

   function visi()
   {
    var random = Math.floor(Math.random() * 6) ;
    mole[random].style.visibility="visible";
     mole[random].style.visibility="visible";
    

    setTimeout(hidi,800);
   
   function hidi()
   {
       mole[random].style.visibility="hidden";
   }
    
   }

   
   


}
function point()
{
   p=p+1;
   document.getElementById('score').innerHTML=p;
}