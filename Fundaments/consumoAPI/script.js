const processInformation = async() =>{
    
    try{
    const response = await fetch('../JSON/persona.json');
    const person = await response.json();
    console.log("la persona es",person);
    showInfo(person);
    }
    catch(e){
        console.log("se presento el siguiente error", error);
        alert("Hubo un error inesperado, por favor intente más tarde");
    }
}

const uploadAPI  = async() =>{
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        const movies = await response.json();
        console.log(movies);
    } catch (e) {
        console.log("Error al llamar a la API: ", e);
        alert("Hubo un error inesperado, por favor intente más tarde");
    }
}

const showInfo = (person) =>{
    console.log('Construcción del HTML');
    const infoContainer = document.getElementById('data');
    infoContainer.innerHTML = `
        <h2 class="miNombre">${person.primer_nombre}</h2>
        <p class="miEdad">Edad: ${person.edad}</p>
        <div class="misHobbies">
            <h3>Hobbies</h3>
            <ul>
                <li>${person.hobbies[0]}</li>
                <li>${person.hobbies[1]}</li>
                <li>${person.hobbies[2]}</li>
            </ul>
        </div>
    `
}