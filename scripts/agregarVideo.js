
    const newVideo = [];
// Captura el formulario
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    // .preventDefault  evita que ocurra la accion que viene asociada al submit por defecto(La recarga de la pagina)
    event.preventDefault();
    // Nos entrega una array con los elementos hijos de fomr
    const valuesForm = Object.values(form);
    console.log(valuesForm);
    // Obtener objeto con la informacion ingresada en formulario en el input
    const formInfo = {};
    valuesForm.forEach(valueInput => {
        if (valueInput.id){
        formInfo[valueInput.id]=valueInput.value;
        }
    })

    newVideo.push(formInfo);
    console.log(newVideo);
    console.log(formInfo);
    localStorage.setItem("nuevoVideo",JSON.stringify(newVideo));
});






