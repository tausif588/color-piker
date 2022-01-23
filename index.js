const btn = document.querySelector('button');
btn.addEventListener('click',function(){


setBgColor()
   
    
})

// Change after n second 
const n = 1;
setInterval(()=>{setBgColor()},n*1000)


const setBgColor = function(){
        const red=Math.floor(Math.random()*149);
        const green=Math.floor(Math.random()*149);
        const blue=Math.floor(Math.random()*149);
        const rgb=`rgb(${red},${green},${blue})`;
        btn.innerHTML = rgb;
        document.body.style.backgroundColor = rgb;
   
}