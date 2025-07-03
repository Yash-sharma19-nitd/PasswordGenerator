const pass = document.getElementById('password');
const btn2 = document.getElementById('btn2');
const inup= document.getElementById('uppercase');
const inlw= document.getElementById('lowercase');
const insym= document.getElementById('symbol');
const innum= document.getElementById('number');
const range=document.getElementById('range');
const num = document.getElementById('num');


range.addEventListener('input',(e)=>
{
    num.innerText=range.value;
    
})

document.getElementById('btn1').addEventListener('click',()=>
{
    document.getElementById('copy').style.display='block';
    // document.getElementById('copy').style.transitionDuration='2000';
    setTimeout(() => {
    document.getElementById('copy').style.display='none';
    },1500);

    console.log(pass.innerText);
    window.navigator.clipboard.writeText(pass.innerText);
})

btn2.addEventListener('click',(e)=>
    {
        const upcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lwcase = 'abcdefghijklmnopqrstuvwxyz';
        const symbols = '!@#$%^&*()_+?><.,/\|[]{}';
        const num ='1234567890';
        let finalStr='';
        

        if(inup.checked)
        {
            // console.log("hell");
            finalStr+=upcase;
        }
        if(inlw.checked)
        {
            finalStr+=lwcase;
        }if(insym.checked)
        {
            finalStr+=symbols;
        }if(innum.checked)
        {
            finalStr+=num;
        }
        if( !(inup.checked) && !(inlw.checked) &&!(innum.checked) && !(insym.checked))
        {
            alert('please select anyone checkbox');
            e.preventDefault();
        }
        // console.log(finalStr);
        const size = range.value ;
        // console.log();
        let last ='';
        if(finalStr.length!=0)
        {
            for( let i = 0 ;i<size;i++)
        {
            let raw = Math.floor(Math.random()*(finalStr.length));
            // console.log(random);
            last+=finalStr.at(raw);
            
            
            
        }
        // console.log(last);
        pass.innerText=`${last}`;
        }
        
        
        


    }
)


