let Arr=[
    {firstName:'abc',lName:'def'},
    {firstName:'pqr',lName:'xyz'},
    {firstName:'lmn',lName:'uvw'},
]

function getData(){
    setTimeout(()=>{
        let output='';
        Arr.forEach((val,index)=>{
            output+='<p>'+val.firstName+'</p>';
            
        });
        document.body.innerHTML=output;
    },3000);
}

function setData(newVal,callback){
    setTimeout(()=>{
        Arr.push(newVal);
        callback();
    },2000);
}

setData({fisrtName:"Aahana",lastName:"Pujara"},getData);

    