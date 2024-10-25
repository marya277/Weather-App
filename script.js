$(document).ready(function() {
    setTimeout(function() {
        $('#welcomeCard').addClass('show');
    }, 100);

    $('#continueBtn').click(function() {
        window.location.href = 'weather.html';
    });

    const apiKey = '7340a59d8b0708c929301d34a21a04c2';

    $('#weatherForm').submit(function(event) {
        event.preventDefault(); 
        getWeather();
    });

    function getWeather() {
        const cityName = $('#cityInput').val().trim(); 
        if (!cityName) {
            $('#errorMessage').text('Por favor ingrese el nombre de una ciudad');
            return;
        }

        $('#weatherInfo').html('<p>Loading...</p>');

        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .done(function(data) {
                $('#errorMessage').text(''); 

                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const weatherMain = data.weather[0].main;
                const weatherDescription = data.weather[0].description;
                const weatherIcon = data.weather[0].icon;

                // Mostrar la información del clima en la card
                $('#weatherInfo').html(`
                    <div class="card__weather-info-item slide-in">
                        <img src="img/termometer1.png" alt="Imagen de temperatura" class="card__image-temperature">
                        <h3 class="weather-title" ><strong>${cityName}</strong> ${temperature}°C</h3>
                    </div>
                    <div class="card__weather-info-item slide-in">
                        <img src="img/humidity_vector.png" alt="Imagen de temperatura" class="card__image-humidity">
                        <p class="weather-description" ><strong>Humedad:</strong> ${humidity}%</p>
                    </div>
                    <div class="card__weather-info-item slide-in">
                        <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" class="card__image-humidity" alt="Weather icon">
                        <p class="weather-description" ><strong>Clima:</strong> ${weatherMain}</p>
                    </div>
                `);

                $('#backBtn').show();

                setTimeout(function() {
                    $('.slide-in').addClass('show');
                }, 200);
            })
            .fail(function() {
                $('#errorMessage').text('Ciudad no encontrada o ha ocurrido un error. Por favor intente de nuevo.');
                $('#weatherInfo').empty(); 
                $('#backBtn').hide();
            });
    }

    $('#backBtn').click(function() {
        window.location.href = 'index.html';
    });
});
