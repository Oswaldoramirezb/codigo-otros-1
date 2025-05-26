const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('name'); //La variables no coinciden con los elementos, la recomendación es que siempre se ocupen nombres de variables con nombres completos, no ocupar n, a, b, c, tienen que ser mas descriptivas
const $blog = document.querySelector('#blog');
const $location = document.querySelector('.location');

async function displayUser(username) { //necesitamos agregar el async porque ocupamos await
  try {
    $name.textContent = 'cargando...'; //acomodo las variables de name, blog y location como aparecen arriba
    const response = await fetch(`${usersEndpoint}/${username}`);
    console.log(data);
    $name.textContent = '${data.name}';
    $blog.textContent = '${data.blog}';
    $location.textContent = '${data.location}';
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