//  Lectura del local storage.

let arrayNuevo = JSON.parse(localStorage.getItem("nuevoVideo"));

if (arrayNuevo === null) {
  arrayNuevo = [];
}

// Creo el array de la lista de 30 videos - Tres categorias Salsa, Merengue y reggaton.

 export const videos = [
  ...arrayNuevo,
  {    
    genero: "salsa",
    autor: "El gran combo de PR",
    nombreCancion: "Yo soy tu amigo",
    url: "https://player.vimeo.com/video/145453413?h=e83a6bf78a",
    //url: "https://player.vimeo.com/video/156907659?h=9915b1b95b"
  },

  {
    genero: "salsa",
    autor: "grupo niche",
    nombreCancion: "Cali pachanguero",
    //url: "https://www.tropicanafm.com/wp-content/uploads/2018/06/cali-pachanguero.jpg",
    url: "https://player.vimeo.com/video/67667065?h=a2dad60696",
  },

  {
    genero: "merengue",
    autor: "sandy y papo",
    nombreCancion: "Es hora de bailar",
    url: "https://player.vimeo.com/video/84169792?h=e777652b4c",
  },

  {
    genero: "merengue",
    autor: "Eddy Herrera",
    nombreCancion: "Ahora soy yo",
    url: "https://player.vimeo.com/video/129248099?h=65e38fa17d",
  },

  {
    genero: "regaetton",
    autor: "Tito el bambino",
    nombreCancion: "Enamorado",
    url: "https://player.vimeo.com/video/12493009?h=289a9e191c",
  },

  {
    genero: "regaetton",
    autor: "Daddy Yankee",
    nombreCancion: "Sigueme y te sigo",
    url: "https://player.vimeo.com/video/127972192?h=c342f4a239",
  },
];


localStorage.setItem("todosVideos", JSON.stringify(videos));

const imprimirVideos = (videos, contenedor) => {
  // vaciar el contenido del contenedor
  contenedor.innerHTML = "";
  // Recorrer el array
  videos.forEach((video) => {
    const article = document.createElement("article");
    article.classList.add("main_videos");
    article.innerHTML = `

        <iframe class="video"
            src= ${video.url}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h1 class="nameCancion" >Titulo: ${video.nombreCancion}</h1>
          <h3 class="nameAutor" id=${videos.indexOf(video)} >Autor: ${video.autor}</h3> 

        `;
    contenedor.appendChild(article);
  });
};

//<h1 class="nameCancion" ><a href="./paginas/datosVideo.html">Titulo: ${video.nombreCancion}</a></h1>

// Capturar el contenedor donde van a ir los videos.

const main = document.querySelector(".main");

const contenedorVideos = document.getElementById("contenedorVideos");
console.log(contenedorVideos);

document.addEventListener("DOMContentLoaded", () => {
  imprimirVideos(videos, contenedorVideos);
});

const genero = videos.map((video) => `${video.genero}`);
console.log(genero);

const setGenero = new Set(genero);
console.log(setGenero);

const arrayFiltros = ["todos", ...setGenero];
console.log(arrayFiltros);

arrayFiltros.forEach((genero) => {
  const generoButton = document.getElementById(genero);
  console.log(generoButton);

  generoButton.addEventListener("click", () => {
    let filtrado = videos.filter((video) => video.genero == genero);
    console.log("test");
    console.log(filtrado);
    let filtradoArray = genero === "todos" ? videos : filtrado;
    console.log(filtradoArray);

    // Invocar la funcion de imprimir los videos
    imprimirVideos(filtradoArray, contenedorVideos);
  });
});

// Buscar en los videos por nombre

const buttonBuscar = document.getElementById("buscar");
buttonBuscar.addEventListener("click", ()=>{
    const nameBuscar = document.getElementById("buscarName");
    // let buscado = videos.filter(name => name.nombreCancion === nameBuscar.value);
    const buscado = videos.filter(video => 
      video.nombreCancion.toLowerCase().trim().includes(nameBuscar.value.toLowerCase().trim())     
    );
    imprimirVideos(buscado,contenedorVideos);    
});


// Dirigir al detalle del video.

document.addEventListener("click", (event)=> {
  
 const { target } = event;

 if(target.classList.contains('nameAutor')){

   localStorage.setItem('seeDetails', JSON.stringify(target.id));
   window.location.href = "./paginas/datosVideo.html";

 }
})

