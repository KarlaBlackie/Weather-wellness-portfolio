# Portafolio: Weather and Wellness App de clima y salud emocional 
### Proyecto Final - Módulo de consolidación (Frontend Bootcamp)


¡Bienvenido! Esta es una **SPA(Single page application) desarrollada con Vue 3**, enfocada en  proporcionar información climática 
en tiempo real combinada con mensajes de bienestar emocional y estadísticas avanzadas.
Esta versión integra un sistema de autenticación, gestión de estado global con **Vuex**, rutas protegidas y una profunda lógica de
 datos metereológicos.

## Sobre la autora: Tecnología con propósito
Soy **Karla Jara Mena**, profesora de Inglés y desarrolladora Frontend en formación. Mi visión es unir la precisión del código con
 la empatía de la enseñanza.

Como fundadora del Canal **"La Manada del Corazón"**, dedico parte de mi tiempo en promover la adopción de perritos sin hogar, 
además del bienestar de mi manada(5,de ellos 4 rescatados). Por ello, esta app no solo entrega datos, sino que busca generar un 
impacto positivo en el ánimo y 
organización diaria de quienes la usan.

# Características principales:

**Sistema de usuarios:** Inicio de sesión simulado que personaliza la experiencia.(identidad del usuario en la interfaz)
**Estado global(vuex):** Manejo centralizado de la sesión, autenticación y su lista de ciudades favoritas.
**Estadísticas semanales:** Lógica avanzada que calcula promedios, temperaturas máximas/mínimas y detecta días de lluvia/sol.
**Alertas inteligentes:** Notificaciones visuales automáticas para olas de calor (>30°C) o alertas de lluvia persistente.
**Rutas protegidas:** Uso de navigation guards, para asegurar que solo los usuarios logueados accedan a sus favoritos.
**Consumo de API:** Integración con Open-Meteo para datos climáticos reales y precisos.
**UI con Bootstrap 5:** diseño moderno, responsivo y accesible.

# Tecnologías utilizadas

**Vue.js 3**(composition API)
**Vuex 4**(Gestión de estado global)
**Vue router 4** (Navegación y Navigation Guards)
**Bootstrap 5 & icons**(Estilos y Layout)
**Axios / Fetch**(Peticiones HTTP)

# Rutas de la aplicación

| Ruta | Descripción | Acceso |

| `/` | **Home**: Buscador de ciudades y consejos de bienestar. | Público |
| `/login` | **Login**: Formulario de acceso para personalizar la experiencia. | Público |
| `/acerca` | **Acerca**: Información del proyecto. | Público |
| `/detalle/id` | **Detalle**: Estadísticas avanzadas, alertas y pronóstico extendido. | Público |
| `/favoritos` | **Favoritos**: Ciudades guardadas por el usuario. | Privado ( Requiere login) |


# Autenticación y funcionalidades clave

1. **Persistencia y Vuex:** Al iniciar sesión, se activa el estado `isAuthenticated`. El nombre de usuario se mantiene visible
 para personalizar los mensajes de bienestar.
2. **Favoritos:** el usuario puede marcar ciudades con un corazón. Esta información se guarda en el store de vuex y se refleja
 instantáneamente en la vista favoritos.
3. **Seguridad:** El router.beforeEach protege la ruta de favoritos; si intentas acceder sin loguearte, la app te redirige al
 Login.
4.**Lógica climática:** Implementación de conversores dinámicos de temperatura (Celsius/Fahrenheit) mediante propiedades computadas.
5.**Consejos de bienestar:**Cada ciudad seleccionada muestra un mensaje optimista para motivar tu jornada.



# Instalación y ejecución
Sigue estos pasos para ejecutar el proyecto localmente:
1.Clonar el repositorio:

git clone https://github.com/KarlaBlackie/Weather-wellness-portfolio

2.Entrar a la carpeta del proyecto

cd weather-frontend-m8

3.Instalar dependencias

npm install

4.Ejecutar el servidor de desarrollo:
npm run dev

Nota sobre API: esta aplicación utiliza la API pública de Open-Meteo, por lo que no requiere configuración de claves de API externas en un archivo .env.


# Repositorio
https://github.com/KarlaBlackie/Weather-wellness-portfolio


# Autor
Desarrollado por Karla Irene Jara Mena. Enseñando inglés, rescatando patitas y escribiendo código.


  
