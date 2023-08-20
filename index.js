let n=10;

let bars=[];

  creatBars();

  let audio=new Audio("./music/start.mp3");
    


document.querySelector("#start").addEventListener("click" , bubbleSort);
var slider=document.querySelector("#numbesrOfBars");
var speedSlider =document.querySelector("#speed");
let spd=400;

const sleep =(time)=>{
    return new Promise(resolve => setTimeout(resolve, time))
        
}
slider.oninput=function()
{
    document.querySelector(".display").innerHTML= slider.value;
    n=slider.value;
    creatBars();
}
speedSlider.oninput=function()
{
    document.querySelector(".speed-display").innerHTML= speedSlider.value;

    spd=speedSlider.value;
    spd=420-spd;
   
   
}

function creatBars()
{
    for(let i=0;i<n;i++)
    {
        bars[i]={
           height:(parseInt(Math.random()*100)),
           color:"black"
        };

        if(bars[i].height<5)
        {
            bars[i].height=5;
            
        }
        
    }
   
    printBars();
}


function printBars()
{
    document.getElementById("container").innerHTML=" ";
   
    for(let i=0;i<n;i++)
    {
        const bar=document.createElement("div");
        bar.style.height=bars[i].height+"%";
        bar.style.backgroundColor=bars[i].color;
        bar.classList.add("bar");
        container.appendChild(bar);

    }
    
}


 async function bubbleSort()
{
    audio.play(); 
    let processDone=false;
    let counter=0;
    for(let i=0;i<n;i++)
    {    
        
            for(let j=1;j<n-counter;j++)
            {
                await sleep(spd);

                bars[j-1].color="red";
                bars[j].color="red";
                printBars();


                
                    if(bars[j-1].height>bars[j].height)
                    {
                        var temp={...bars[j-1]};
                        bars[j-1]={...bars[j]};
                        bars[j]={...temp};

                        console.log(bars[j-1]);
                       
                        printBars();
                    
                    }

                    bars[j-1].color="black";
                    bars[j].color="black";

            }

            bars[n-1-counter].color="green";
            counter++;
            processDone=true;  
    }

    bars[0].color="green";
    bars[1].color="green";
    
    printBars();
    if(processDone && counter==n)
    {
        audio=new Audio("./music/done.mp3");
        audio.play(); 
        
    }

    
}


