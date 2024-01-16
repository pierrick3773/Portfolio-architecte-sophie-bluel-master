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
  function displayImages(data) {
    
    const imageContainer = document.getElementById('figure');
    data.forEach(data => {
      const imgElement = document.createElement('img');
      imgElement.src = work.imageUrl;
      imgElement.alt = work.title;

      imageContainer.appendChild(imgElement);
    });
  }
      document.addEventListener('DOMContentLoaded', () => {
        getWorks();
      });




