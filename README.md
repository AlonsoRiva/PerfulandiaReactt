# Perfulandia - Proyecto React (SPA) 🛍️

Este proyecto es una tienda de perfumes ficticia llamada "Perfulandia", desarrollada como parte de la Evaluación Parcial 2 para la asignatura DSY1104 (Desarrollo Fullstack II) de Duoc UC.

El proyecto original, que estaba construido con HTML, CSS y JavaScript estático, fue migrado exitosamente a una **Single Page Application (SPA)** utilizando la biblioteca **React**.

## ✨ Características Principales

La aplicación utiliza componentes de React y el hook `useState` para gestionar el estado de la navegación y los formularios.

* **Navegación SPA:** Se puede navegar entre las vistas "Inicio", "Catálogo", "Contacto" y "Login" sin necesidad de recargar la página. La vista se controla mediante un estado en el componente `App.js`.
* **Componente de Catálogo:** El catálogo de perfumes (`Catalogo.js`) se renderiza dinámicamente iterando sobre un arreglo local de productos.
* **Componente de Autenticación:** Un componente unificado (`Auth.js`) maneja tanto el **Inicio de Sesión** como el **Registro**.
* **Validaciones (Frontend):** El formulario de autenticación incluye lógica de validación en el lado del cliente:
    * El correo debe ser `@gmail.com` o `@duocuc.cl`.
    * La contraseña debe tener más de 6 caracteres y al menos una mayúscula.

## 🚀 Cómo ejecutar el proyecto

Para levantar el servidor de desarrollo local:

1.  Clonar este repositorio.
2.  Instalar las dependencias del proyecto:
    ```bash
    npm install
    ```
3.  Ejecutar la aplicación:
    ```bash
    npm start
    ```
    (O `npm run dev` si se usa Vite).

## 🛠️ Stack de Tecnologías

* **React:** Biblioteca principal para la construcción de la interfaz de usuario.
* **React Hooks:** (`useState`) para la gestión de estados locales (navegación y formularios).
* **CSS:** Estilos personalizados (`App.css`) para todos los componentes.

## 👨‍💻 Autor

* **Alonso Rivadeneira Barrales**
* **Asignatura:** DSY1104 - Desarrollo Fullstack II
* **Institución:** Duoc UC
