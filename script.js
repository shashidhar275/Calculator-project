let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText == '=')
        {
            string = eval(string);
            document.querySelector('.input').value = string;
            return ;
        }
        string  += e.target.innerHTML;
        document.querySelector('.input').value = string;
    })
})

document.querySelector('.clear-button').addEventListener('click',()=>{
    console.log('hi');
    string = '';
    document.querySelector('.input').value = string;
})