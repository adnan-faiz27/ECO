const cp_label = document.getElementById(`CP_label`);
const CP = document.getElementById(`input4`);
const input1 = document.getElementById(`input1`);
const I = document.getElementById(`input2`);
const N = document.getElementById(`input3`);
const type_heading = document.getElementById(`type`);
const main_input = document.getElementById(`main_input`);
const year = document.getElementById(`year_label`);
const output = document.getElementById(`output`);


function change(type)
{
    if(type==`P/F`)
    {
        type_heading.innerText=`P/F`;
        main_input.innerText=`F`;
        cp_label.style.visibility='hidden';
        N.style.visibility=`visible`;
        year.innerText=`N`
        // pp_label.style.visibility='hidden';
        CP.style.visibility='hidden';
        // PP.style.visibility='hidden';
    }
    if(type==`F/P`)
    {
        type_heading.innerText=`F/P`;
        main_input.innerText=`P`;
        cp_label.style.visibility='hidden';
        N.style.visibility=`visible`;
        year.innerText=`N`
        // pp_label.style.visibility='hidden';
        CP.style.visibility='hidden';
        // PP.style.visibility='hidden';
    }
    if(type==`F/A`)
    {
        type_heading.innerText=`F/A`;
        main_input.innerText=`A`;
        cp_label.style.visibility='hidden';
        N.style.visibility=`visible`;
        year.innerText=`N`;
        // pp_label.style.visibility='hidden';
        CP.style.visibility='hidden';
        // PP.style.visibility='hidden';
    }
    if(type==`A/F`)
    {
        type_heading.innerText=`A/F`;
        main_input.innerText=`F`;
        cp_label.style.visibility='hidden';
        N.style.visibility=`visible`;
        year.innerText=`N`
        // pp_label.style.visibility='hidden';
        CP.style.visibility='hidden';
        // PP.style.visibility='hidden';
    }
    if(type==`P/A`)
    {
        type_heading.innerText=`P/A`;
        main_input.innerText=`A`;
        cp_label.style.visibility='hidden';
        N.style.visibility=`visible`;
        year.innerText=`N`
        // pp_label.style.visibility='hidden';
        CP.style.visibility='hidden';
        // PP.style.visibility='hidden';
    }
    if(type==`A/P`)
    {
        type_heading.innerText=`A/P`;
        main_input.innerText=`P`;
        cp_label.style.visibility='hidden';
        N.style.visibility=`visible`;
        year.innerText=`N`
        // pp_label.style.visibility='hidden';
        CP.style.visibility='hidden';
        // PP.style.visibility='hidden';
    }
    if(type==`A/G`)
    {
        type_heading.innerText=`A/G`;
        main_input.innerText=`A`;
        cp_label.style.visibility='visible';
        cp_label.innerText=`G`
        N.style.visibility=`visible`;
        year.innerText=`N`
        // pp_label.style.visibility='visible';    
        CP.style.visibility='visible';
        // PP.style.visibility='visible';
        
    }
    if(type==`I`)
    {
        type_heading.innerText=`Ieff`;
        main_input.innerText=`CP`;
        cp_label.style.visibility='visible';
        cp_label.innerText='PP';
        N.style.visibility=`hidden`;
        year.innerText=`Quat-4/Semi-2/mon-12`
        CP.style.visibility='visible';
        // year.style.visibility='hidden';
    }
}

function calculate()
{
    if(type_heading.innerText==`F/P`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let ans=(input1.value*b).toFixed(2);
        output.innerText=`${ans}`;
    }
    if(type_heading.innerText==`P/F`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let c =(Number(input1.value)/b).toFixed(1)
        output.innerText=`${c}`;
    }
    if(type_heading.innerText==`F/A`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let n=Number(N.value);
        let d=((Number(input1.value)*(b-1))/(Number(I.value)/100)).toFixed(1);
        if(a==1)
            output.innerText=`${n*Number(input1.value)}`;
        else
            output.innerText=`${d}`;
    }
    if(type_heading.innerText==`A/F`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let n=Number(N.value);
        let d=((Number(input1.value)*Number(I.value)/100)/(b-1)).toFixed(1);
        if(a==1)
            output.innerText=`${Number(input1.value)/n}`;
        else
            output.innerText=`${d}`;
    }
    if(type_heading.innerText==`P/A`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let n=Number(N.value);
        let i = Number(I.value)/100;
        let input=Number(input1.value);
        let d=(input*(b-1)/(i*b)).toFixed(1);
        if(i==0)
            output.innerText=`${Number(input1.value)*n}`;
        else
            output.innerText=`${d}`;
    }
    if(type_heading.innerText==`A/P`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let n=Number(N.value);
        let i = Number(I.value)/100;
        let input=Number(input1.value);
        let d=(input*(i*b)/(b-1)).toFixed(1);
        if(i==0)
            output.innerText=`${Number(input1.value)/n}`;
        else
            output.innerText=`${d}`;
    }
    if(type_heading.innerText==`A/G`)
    {
        let a = 1+(Number(I.value)/100);
        let b = Math.pow(a,Number(N.value));
        let n=Number(N.value);
        let i = Number(I.value)/100;
        let input=Number(input1.value);
        let d = (input+(Number(CP.value)*(b-(i*n)-1)/((i*b)-i))).toFixed(1);
        if(i==0)
            output.innerText=`${n*(2*input+(n-1)*CP)/2}`;
        else
            output.innerText=`${d}`;
    }
    if(type_heading.innerText==`Ieff`)
    {
        let cp=Number(input1.value);
        let i =Number(I.value)/100;
        let pp = Number(CP.value);
        let d = ((Math.pow(1+(i/cp),pp)-1)*100).toFixed(2);
        output.innerText=`${d}`;
    }
}