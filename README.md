# autenticar-frontend
 Paso 1: Estructura de carpetas
 src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MainLayout.jsx
│   └── home/
│       └── WelcomeSection.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AddUserPage.jsx
│   ├── UsersPage.jsx
│   └── LoginPage.jsx
├── App.jsx
└── main.jsx

Paso 2: Instalar React Router
npm install react-router-dom

Paso 3: Crear los archivos

1. src/components/layout/Header.jsx
2. src/components/layout/Footer.jsx
3. src/components/layout/MainLayout.jsx
4. src/components/home/WelcomeSection.jsx
5. src/pages/HomePage.jsx
6. src/pages/AddUserPage.jsx
7. src/pages/UsersPage.jsx
8. src/pages/LoginPage.jsx
9. src/App.jsx
10. src/main.jsx
11. src/index.css
13. index.html


Actualizar para despliegue
{
  "name": "mi-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.9.3"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}


Instalar dependencias:
npm install react react-dom react-router-dom react-scripts --save


Probar en desarrollo:
npm start

Generar build de producción:
npm run build




