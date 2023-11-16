var k;
call();
async function call(){
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    display(data);
}
function display(data){
    let a= data.data;
    console.log(a)
    let b = document.getElementById("appendC");
  
    for(let i of a){
        let c = document.createElement('div');     
        c.innerHTML = `<button class="btn btn-primary" onclick="clk('${i.category_id}')" > ${i.category} </button>`
        b.appendChild(c);
        
    }
}    async function clk(x) {  
    
          if (x=="1005"){
           window.location.href = "./error.html";
          } 
      
       const res2 = await fetch(`https://openapi.programming-hero.com/api/videos/category/${x}`);
       const data2 = await res2.json();
        display2(data2)      
       
    
}

function display2(data2){

    let zz = (data2.data)
  console.log(zz)
   let d= document.getElementById('appendDiv')
   d.innerHTML = "";
    let number=[];
   for(let i of zz){
    let e = document.createElement('div')
    


    let time_date = i.others?.posted_date;
    
    if(time_date>0){
        var y,z,zzz;
    y=parseInt(time_date/3600);
        time_date = time_date%3600;
        z=parseInt(time_date/60);
        zzz=parseInt(time_date-(z*60));
       
    }
    else{
        y=0;
        z=0;
        zzz=0
    }


    e.innerHTML = `<img src = "${i.thumbnail}" class="w-80 h-52 full pt-10" />
    <h2>${i.title}</h2>
    <div class="flex gap-2 items-center justify-start">
    <img src= "${i.authors[0].profile_picture}" class="h-10 w-10 rounded-full"/>
    <p> ${i.authors[0].profile_name}</p>
    <img src="${i.authors[0]?.verified?"./images/tick.svg":''}"/>
     </div>
      
    <p> ${i.others?.views} Views</p>
    <p id="date"> ${y}hr ${z}mins ${zzz}secs</p>
    
   
    `
    d.appendChild(e);
    
   }
   

}

 clk(1000);

