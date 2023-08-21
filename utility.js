function discount(target){
   // const discountall=target.parentNode.childNodes[10].innerText
    const discountfor=document.getElementById('discount')
    
    const inputfor=target.parentNode.childNodes[12]
    const valuadd=inputfor.value
    if(valuadd=='dis30'){
        discountfor.innerText=' wow mother fucker you got discount. Price: 700'

    }else{
        alert('invalid copun chor dimu jadu thik kor')
    }

    inputfor.value=''

}