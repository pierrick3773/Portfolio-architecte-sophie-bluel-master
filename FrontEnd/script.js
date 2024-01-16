console.log("hello world");

const API_BASE_URL = "http://localhost:5678/api"

function getWorks() {
  return fetch (`${API_BASE_URL}/works`)
  .then (Response => Response.json () )
  .then ( data => { console.log(data);
  return data})
  .then(data => {
    // appeler une function de display images
    displayImages(data);
  })
  
    
  } 
  function displayImages(data) {
    
    const imageContainer = document.getElementsByClassName(`gallery`)[0]
    console.log(imageContainer);
    for (const works of data) {
      const imgDiv = document.createElement('figure');
      const imgElement = document.createElement('img');
      imgElement.src = works.imageUrl;
      imgElement.alt = works.title;
      console.log(imageContainer);
      imageContainer.appendChild(imgDiv);
      imgDiv.appendChild(imgElement)
    };
  }
      document.addEventListener('DOMContentLoaded', () => {
        getWorks();
      });




