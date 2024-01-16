console.log("hello world");

const API_BASE_URL = "http://localhost:5678/api"

function getWorks() {
  return fetch (`${API_BASE_URL}/works`)
  .then (Response => Response.json () )
  .then ( data => { console.log(data);})
  .then(data => {
    // appeler une function de display images
    displayImages(data);
  })
  
    
  } 
  function displayImages(Objets) {
    
    const imageContainer = document.getElementById('figure');
    Array.forEach(Objets => {
      const imgElement = document.createElement('img');
      imgElement.src = work.imageUrl;
      imgElement.alt = work.title;

      imageContainer.appendChild(imgElement);
    });
  }
      document.addEventListener('DOMContentLoaded', () => {
        getWorks();
      });


getWorks ()

