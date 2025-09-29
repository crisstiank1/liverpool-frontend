# ⚽ Liverpool FC App

Aplicación web hecha con **React + Vite** para visualizar la plantilla y estadísticas del Liverpool FC.  
Permite filtrar jugadores por posición, mostrar datos del club y estadísticas generales.

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone <URL_REPOSITORIO>
   cd frontend

2. Instalar dependencias:
    
    npm install

3. Crear un archivo .env en la raíz del proyecto con la variable de la API:

    VITE_API_URL=http://localhost:5000

4. Ejecutar el proyecto en modo desarrollo:

    npm run dev

5. Abrir en el navegador:
👉 http://localhost:5173


📂 Estructura del proyecto
src/
 ├─ assets/         # Imágenes, íconos, etc.
 ├─ components/     # Componentes reutilizables (Header, Footer, Filters, PlayerCard)
 ├─ styles/         # Archivos CSS para cada componente
 ├─ utils/          # Constantes y helpers
 ├─ App.jsx         # Componente principal
 ├─ main.jsx        # Punto de entrada React
 └─ index.css       # Estilos globales


🛠️ Tecnologías

React 18
Vite
Axios
CSS3 con módulos organizados

📌 Funcionalidades

Mostrar plantilla de jugadores.
Filtro dinámico por posición.
Estadísticas generales del equipo.
Manejo de errores y pantalla de carga elegante.


