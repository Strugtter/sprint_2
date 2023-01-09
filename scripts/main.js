//  Lectura del local storage.

let arrayNuevo = JSON.parse(localStorage.getItem("nuevoVideo"));

if (arrayNuevo === null) {
  arrayNuevo = [];
}

// Creo el array de la lista de 30 videos - Tres categorias Salsa, Merengue y reggaton.

const videos = [
  ...arrayNuevo,
  {
    genero: "salsa",
    autor: "Ricardo Ray y Bobby cruz",
    nombreCancion: "Sonido bestial",
    url: "https://player.vimeo.com/video/156907659?h=9915b1b95b",
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
    autor: "Don omar",
    nombreCancion: "Bandolero",
    url: "https://player.vimeo.com/video/172711304?h=ea11eae029",
  },

  {
    genero: "regaetton",
    autor: "Hector el father",
    nombreCancion: "Payaso",
    url: "https://player.vimeo.com/video/17116610?h=f748c28b9c",
  },
];

console.log(videos);
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
        `;
    contenedor.appendChild(article);
  });
};

// Capturar el contenedor donde van a ir los videos.

const main = document.querySelector(".main");

const contenedorVideos = document.getElementById("contenedorVideos");

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
console.log(videos);
const buttonBuscar = document.getElementById("buscar");
buttonBuscar.addEventListener("click", ()=>{
    const nameBuscar = document.getElementById("buscarName");
    console.log(nameBuscar.value);
    let buscado = videos.filter(name => name.nombreCancion == nameBuscar.value);
    console.log(buscado);
    imprimirVideos(buscado,contenedorVideos);    
});
