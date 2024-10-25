# Weather App 🌦️

Una aplicación simple para obtener el clima de una ciudad usando HTML, CSS, JavaScript, jQuery y la API de OpenWeatherMap.

## Descripción

Esta aplicación permite a los usuarios ingresar el nombre de una ciudad y obtener la información del clima actual, como la temperatura, la humedad y una descripción breve del clima, junto con un ícono representativo.

## Demo

Puedes ver la aplicación en vivo en [Vercel](https://weather-app-five-teal-16.vercel.app/).

## Tecnologías

- **HTML**
- **CSS** (con diseño responsivo)
- **JavaScript** (y **jQuery** para manipulación del DOM)
- **API de OpenWeatherMap** para obtener los datos del clima.

## Requisitos

- Navegador web moderno (Google Chrome, Firefox, Safari, etc.)
- Conexión a internet para acceder a la API del clima.

## Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/marya277/Weather-App.git
   cd weather-app

2. **Configura la API de OpenWeatherMap**

- Regístrate en OpenWeatherMap y obtén una API Key.
- Reemplaza YOUR_API_KEY en el archivo JavaScript con tu API Key:
``` 
const apiKey = 'YOUR_API_KEY'; 
```
3.  **Abre el archivo index.html**

   Simplemente abre el archivo index.html en tu navegador web preferido.

```
open index.html
```
O arrastra el archivo
```
index.html  
```
directamente a la ventana de tu navegador.
## Uso
- Al abrir la aplicación, verás una tarjeta de bienvenida. Haz clic en "Continuar" para ir a la página principal del clima.
- Ingresa el nombre de una ciudad en el campo de texto y presiona "Buscar" para obtener el clima actual de la ciudad.
- Los resultados se mostrarán en la pantalla con animaciones suaves para cada ícono.
**Funcionalidades**
- Consultar el clima de cualquier ciudad.
- Animaciones en los íconos y elementos del clima para mejorar la experiencia del usuario.
- Diseño adaptado a dispositivos móviles.
**Estructura de Archivos**
```
weather-app/
├── index.html
├── styles.css
├── script.js
├── README.md
├── img/
|   ├── termometer1.png
|   ├── humidity_vector.png
|   └── (otros íconos)
```

**Créditos**
- Iconos de clima proporcionados por OpenWeatherMap.
- Inspirado en el diseño minimalista y fácil de usar para mostrar el clima.
