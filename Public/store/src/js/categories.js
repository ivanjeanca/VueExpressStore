async function getCategories() {
    let result
    console.log(localStorage.getItem("idUsuario"))
    result = await $.ajax({
        url:"http://localhost:3000/api/categories",
        type:"GET",
    });
    return result
}

document.addEventListener('DOMContentLoaded', async function() {
    categories = await getCategories()
    console.log(categories)
    //if(preguntas.valid===1)
})

async function getData(){
    
        data = {
            idUsuario: localStorage.getItem("idUsuario"),
            respuesta: datachain
        }
        sendData(data);
}

async function sendData(data){
    result = await $.ajax({
        url: "http://localhost:3000/api/categories",
        type: "POST",
        data: data
    });
}