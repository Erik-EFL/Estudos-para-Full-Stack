const  startDate = document.querySelector('#dataInicio');
addAttribute(startDate)
function addAttribute(font){
    font.setAttribute("required", "");
    
}


function valiDate(event) {
    const formato = startDate.value.length;
    startDate.setAttribute("maxLength", "10")
    if (isNaN(event.key))
        {event.preventDefault();
    }
    if (formato === 2 || formato === 5) {
        startDate.value = `${startDate.value}/` ;
    }
}

const conteudo = startDate.value;

startDate.addEventListener('keypress', valiDate)