// Obetner el informacion del video que se debe imprimir.

const idVideoStr = localStorage.getItem("seeDetails")
  ? JSON.parse(localStorage.getItem("seeDetails"))
  : null;
const idVideo = idVideoStr ? parseInt(idVideoStr) : null;

console.log(idVideo);

const arrayVideos = localStorage.getItem("todosVideos")
  ? JSON.parse(localStorage.getItem("todosVideos"))
  : [];

console.log(arrayVideos);


//

//Encontrar el video que corresponde al id que acabaos de obtener.

const videoFind = (idVideo != null || idVideo != undefined)
  ? arrayVideos.find((videot) => arrayVideos.indexOf(videot) == idVideo)
  : {};

const contenedor = document.querySelector(".main");

contenedor.innerHTML = `
    <iframe class="main_video"
        src=${videoFind.url}

        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
    ></iframe>
    <ol>
        <li>Genero: ${videoFind.genero}</li>
        <li>Nombre de la cancion: ${videoFind.nombreCancion} </li>
        <li>Autor: ${videoFind.autor}</li>
    </ol>      

`;
