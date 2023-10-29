let api_key = `c6f1677054086e26fd481539c66b2f15`
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15
let iconoUrl = 'https://openweathermap.org/img/wn'


document.getElementById("botonBusqueda").addEventListener('click', ()=> {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch (`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima =document.getElementById("datosClima")
    divDatosClima.innerHTML=""

    const ciudadNombre=data.name
    const paisNombre=data.sys.country
    const temperatura=data.main.temp
    const humedad=data.main.humidity
    const icono=data.weather[0].icon

    const ciudadTitulo = document.createElement("h2")
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`
    const temperaturaParrafo = document.createElement("h4")
    temperaturaParrafo.textContent = `La temperatura es ${Math.floor(temperatura-difKelvin)}°C`
    const humedadParrafo = document.createElement("h4")
    humedadParrafo.textContent= `Con una humedad de ${humedad}%`
    const descripcionParrafo = document.createElement("h4")
    descripcionParrafo.textContent = `El cielo el día de hoy está:`
    const iconoimg = document.createElement("img")
    iconoimg.src = `${iconoUrl}/${icono}@2x.png`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaParrafo)
    divDatosClima.appendChild(humedadParrafo)
    divDatosClima.appendChild(descripcionParrafo)
    divDatosClima.appendChild(iconoimg)
}

