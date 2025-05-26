const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.getElementById('name'); //Ponemos getelementbyid porque es un solo elemento
const $blog = document.getElementById('blog');
const $location = document.getElementById('location');

async function displayUser(username) { //necesitamos agregar el async porque ocupamos await
  try {
    $name.textContent = 'cargando...'; //acomodo las variables de name, blog y location como aparecen arriba
    const response = await fetch(`${usersEndpoint}/${username}`);
    //(console.log(data);
    const data = await response.json(); //Cambiamos el console.log por el data para convertir a json
    $name.textContent = data.name; // Le quitamos las comillas y llaves
    $blog.textContent = data.blog; // Le quitamos las comillas y llaves
    $location.textContent = data.location;// Le quitamos las comillas y llaves
  } catch (error) {
    handleError(error); //No estaba llamando antes en ningun momento si habia error
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);