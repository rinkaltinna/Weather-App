const cityname = document.querySelector('#cityinput')
const btn = document.querySelector('.btn')
const form = document.querySelector('#cityform')
const mycity = document.querySelector('#city')
const image = document.querySelector('#weatherimg')
const weather = document.querySelector('#weatherpara')
const temp = document.querySelector('#temperature')
const date = document.querySelector('#todaydate')
const time = document.querySelector('#todaytime')

let dates = new Date();


form.addEventListener('submit' , function(e)
{
    e.preventDefault();
    
    let city = cityname.value;

    const mycontainer = document.querySelector('.container');
    const weatherimg = document.getElementById('weatherimg');
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        const tempvalue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
         
        

        mycity.innerHTML = city;
        weather.innerHTML =`${weatherMain}`
        temp.innerHTML = `${tempvalue}<span><sup>o</sup>C</span>.`;

        if(weatherMain == 'Clear')
        {
            image.src = `./Images/clear.png`
            mycontainer.style.backgroundColor = '#ec6e4c'
            weatherimg.style.display = "block"
        }
        if(weatherMain == 'Clouds')
        {
            image.src = `./Images/clouds.png`
            mycontainer.style.backgroundColor = '#86d3d3'
            weatherimg.style.display = "block"
        }
        if(weatherMain == 'Rain')
        {
            image.src = `./Images/rain.png`
            mycontainer.style.backgroundColor = '#494bcf'
            weatherimg.style.display = "block"
        }
        if(weatherMain == 'Drizzle')
        {
            image.src = `./Images/drizzle.png`
            mycontainer.style.backgroundColor = '#8ecfcf'
            weatherimg.style.display = "block"
        }
        if(weatherMain == 'Haze')
        {
            image.src = `./Images/drizzle.png`
            mycontainer.style.backgroundColor = '#d8ced2'
            weatherimg.style.display = "block"
        }

        const currentMonth = dates.getMonth();

        switch (currentMonth) {
            case 0:
                date.innerHTML = `${dates.getDate()}, Jan`
                break;
            case 1:
                date.innerHTML = `${dates.getDate()}, Feb`
                break;
            case 2:
                date.innerHTML = `${dates.getDate()}, Mar`
                break;
            case 3:
                date.innerHTML = `${dates.getDate()}, Apr`
                break;
            case 4:
                date.innerHTML = `${dates.getDate()}, May`
                break;
            case 5:
                date.innerHTML = `${dates.getDate()}, Jun`
                break;
            case 6:
                date.innerHTML = `${dates.getDate()}, Jul`
                break;
            case 7:
                date.innerHTML = `${dates.getDate()}, Aug`
                break;
            case 8:
                date.innerHTML = `${dates.getDate()}, Sept.`
                break;
            case 9:
                date.innerHTML = `${dates.getDate()}, Oct`
                break;
            case 10:
                date.innerHTML = `${dates.getDate()}, Nov`
                break;
            case 11:
                date.innerHTML = `${dates.getDate()}, Dec`
                break;
        }

        function leftinterval()
        {
            const left = document.getElementById('todaytime')
            let leftdate = new Date();
            let hours = leftdate.getHours();
            let minutes = leftdate.getMinutes();
            let seconds = leftdate.getSeconds();

            left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`

        }

        setInterval(leftinterval,1000);


    })

})