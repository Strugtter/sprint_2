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
    autor: "Andy Montañez",
    nombreCancion: "Casi te olvido",
    url: "https://player.vimeo.com/video/101172807?h=7bef5634b1",
    //url: "https://player.vimeo.com/video/156907659?h=9915b1b95b"
  },
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
    genero: "merengue",
    autor: "Sergio vargas",
    nombreCancion: "No eres una mas",
    url: "https://player.vimeo.com/video/66048577?h=9f4a890352",
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

  {
    genero: "regaetton",
    autor: "Daddy Yankee",
    nombreCancion: "Limbo",
    url: "https://player.vimeo.com/video/55170685?h=4b0eccac8f",
  },
  {    
    genero: "regaetton",
    autor: "Don omar",
    nombreCancion: "Pobre diablA",
    url: "https://player.vimeo.com/video/185116298?h=83268967a8",
    //url: "https://player.vimeo.com/video/156907659?h=9915b1b95b"
  },
  {    
    genero: "salsa",
    autor: "Tito nieves",
    nombreCancion: "Si me tenias",
    url: "https://player.vimeo.com/video/131870741?h=6084d492c1&title=0&byline=0&portrait=0",

  },
  {    
    genero: "salsa",
    autor: "Marc Anthony",
    nombreCancion: "A quien quiero mentirle",
    url: "https://player.vimeo.com/video/23071238?h=e15fa79123",

  },
  {    
    genero: "salsa",
    autor: "Tony Vega",
    nombreCancion: "Lo mio es amor",
    url: "https://player.vimeo.com/video/27507485?h=2299509bd2",

  },
  {    
    genero: "salsa",
    autor: "Tony Vega",
    nombreCancion: "Esa mujer",
    url: "https://player.vimeo.com/video/518313846?h=695cda1bc0",

  },
  {    
    genero: "salsa",
    autor: "Marc Anthony y Tito el bambino",
    nombreCancion: "Porque les mientes",
    url: "https://player.vimeo.com/video/58459102?h=512b4ef72b",

  },
  {    
    genero: "salsa",
    autor: "Tito nieves",
    nombreCancion: "Yo se que es mentira",
    url: "https://player.vimeo.com/video/148739082?h=f3b6c4ff13&title=0&byline=0&portrait=0",

  },
  {    
    genero: "salsa",
    autor: "Guayacan",
    nombreCancion: "Muchachita",
    url: "https://player.vimeo.com/video/673495728?h=8ff1418517",

  },

  {    
    genero: "regaetton",
    autor: "Arcangel",
    nombreCancion: "Guaya",
    url: "https://player.vimeo.com/video/39443855?h=27de5",

  },

  {    
    genero: "regaetton",
    autor: "Arcangel y J alvarez",
    nombreCancion: "Regalame una noche mas",
    url: "https://player.vimeo.com/video/13325586?h=9be1d362dc",

  },

  {    
    genero: "regaetton",
    autor: "Bad bunny",
    nombreCancion: "Vete",
    url: "https://player.vimeo.com/video/374073219?h=9740674b2d&title=0&byline=0&portrait=0",

  },

  {    
    genero: "regaetton",
    autor: "Bad bunny",
    nombreCancion: "Bichiyal Feat. Yaviah",
    url: "https://player.vimeo.com/video/397095915?h=8a56f7b6a0&title=0&byline=0&portrait=0",

  },

  {    
    genero: "regaetton",
    autor: "Karol G",
    nombreCancion: "Ella",
    url: "https://player.vimeo.com/video/216588299?h=dc0ba7f802",

  },

  {    
    genero: "regaetton",
    autor: "Karol G",
    nombreCancion: "Bichota",
    url: "https://player.vimeo.com/video/488734904?h=4ac1f2553e",

  },

  {    
    genero: "regaetton",
    autor: "Maluma",
    nombreCancion: "HP",
    url: "https://player.vimeo.com/video/322104517?h=fbe29006bb",

  },

  {    
    genero: "regaetton",
    autor: "Maluma",
    nombreCancion: "Mala mia",
    url: "https://player.vimeo.com/video/287324884?h=574d6670b8",

  },

  {    
    genero: "regaetton",
    autor: "J balvin",
    nombreCancion: "Reggaeton",
    url: "https://player.vimeo.com/video/300653734?h=175f24f63a&title=0&byline=0&portrait=0",

  },

  {    
    genero: "regaetton",
    autor: "J balvin",
    nombreCancion: "Tranquila",
    url: "https://player.vimeo.com/video/55973558?h=f1101b1980",

  },

  {    
    genero: "merengue",
    autor: "Juan Luis Guerra",
    nombreCancion: "Kitipun",
    url: "https://player.vimeo.com/video/330379117?h=5e0ee6af62",

  },

  {    
    genero: "merengue",
    autor: "Zumbalo",
    nombreCancion: "Me siento bien",
    url: "https://player.vimeo.com/video/163697849?h=684c722ab3",

  },

  {    
    genero: "merengue",
    autor: "Eddy herrera",
    nombreCancion: "Zumbalo-Ajena",
    url: "https://player.vimeo.com/video/95186403?h=05395ae44f",

  }
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
          <button class="video_delete" name='${videos.indexOf(video)}'> ❌</button>

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

 if(target.classList.contains('video_delete')){

  console.log(target.name);
   
 //     const confirmDelete = confirm('¿Esta seguro de eliminar este video?')
      Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "Tu quieres revertir esto!",
        icon: 'Advertencia',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Se ha eliminado.',
            'success'
          );
            // Encontrar la posicion del elemento del array.
            const idVideoDelete = parseInt(target.name);

            console.log("test11111");
            console.log(idVideoDelete);
            const positionVideo = videos.findIndex(video => videos.indexOf(video)=== idVideoDelete )
            console.log("tettttt");
            videos.splice(positionVideo,1); 
            console.log(positionVideo);
            // Mostrar nuevamente los videos
            imprimirVideos(videos,contenedor);            
        }
      })

  }
})




