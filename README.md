# GathSession

**GathSession** es una landing page moderna y atractiva para promover una plataforma de comunidades online. Permite a los usuarios conocer, comunicarse y organizar eventos o actividades de manera efectiva y divertida.

![Preview](public/img/Proyecto-Online-Forum-05-20-2025_06_53_PM.png)

## 🌐 Demo en vivo

Puedes ver el proyecto desplegado aquí:  
👉 [https://frankjimenez79.github.io/online-forum](https://frankjimenez79.github.io/online-forum)

---

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/) — Entorno de desarrollo rápido para proyectos frontend.
- [Sass](https://sass-lang.com/) — Preprocesador CSS para una escritura más organizada y escalable.
- HTML5 y CSS3
- Estructura modular de carpetas

---

## 📁 Estructura del proyecto

```bash
online-forum/
│
├── public/               # Archivos estáticos
│
├── src/
│   ├── assets/           # Imágenes, íconos, etc.
│   ├── scss/             # Estilos en Sass
│   │   ├── abstracts/    # Variables, mixins, funciones
│   │   ├── base/         # Estilos base y resets
│   │   ├── components/   # Botones, tarjetas, etc.
│   │   ├── layout/       # Header, footer, hero, etc.
│   │   ├── pages/        # Estilos por página (si aplica)
│   │   └── main.scss     # Archivo principal Sass
│   ├── main.js           # Punto de entrada JS
│   └── index.html        # HTML principal
│
├── .gitignore
├── README.md
├── vite.config.js
└── package.json
```

---

## 🛠️ Instalación y uso local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/FrankJimenez79/online-forum.git
   cd online-forum
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Compila para producción**
   ```bash
   npm run build
   ```

---

## 🚀 Despliegue en GitHub Pages

Este proyecto está desplegado usando [GitHub Pages](https://pages.github.com/) desde la carpeta `/dist`. Si deseas hacer el despliegue desde cero:

1. Ejecuta:
   ```bash
   npm run build
   ```
2. Instala `gh-pages` (si no lo tienes):
   ```bash
   npm install --save-dev gh-pages
   ```

3. Añade estos scripts al `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Ejecuta:
   ```bash
   npm run deploy
   ```

---

## ✍️ Autor

- **Frank Jimenez**  
  [GitHub](https://github.com/FrankJimenez79)

---

## 📸 Vista previa del proyecto

![Preview del proyecto](public/img/Proyecto-Online-Forum-05-20-2025_06_53_PM.png)

---
