let input=document.querySelector('.inputName')
let btn=document.querySelector('#submit')
let outText=document.querySelector('.outputText')

btn.addEventListener('click',function(event){
    event.preventDefault();
    let name=input.value
    if(name===''){
        alert('а где же имя?')
        alert('попробуй снова')
        input.focus()
    }else{
        outText.innerHTML=`Добро пожаловать, ${name}. Как хорошо что ты написал этот прикольчик)`
        input.value=''
    }
})