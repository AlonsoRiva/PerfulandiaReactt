
## 💻 `README.md` para el Frontend (PerfulandiaReactt)

# 🛍️ Perfulandia - Proyecto React (SPA)

Este proyecto es una tienda de perfumes ficticia llamada "Perfulandia", desarrollada como parte de la **Evaluación Parcial 3** para la asignatura **DSY1104 (Desarrollo Fullstack II)** de Duoc UC.

El proyecto original fue migrado exitosamente a una **Single Page Application (SPA)** utilizando la biblioteca **React**, implementando una capa de interfaz de usuario para interactuar con la **API REST** de un backend en Spring Boot.

## ✨ Características Principales

La arquitectura se centra en la gestión dinámica del estado y la interacción con el backend para ofrecer una experiencia de usuario fluida y con control de acceso:

  * **Navegación SPA:** La navegación entre las vistas "Inicio", "Catálogo", "Contacto" y "Login" se gestiona completamente con el *hook* `useState` en el componente principal `App.js`, evitando recargas de página.
  * **Autenticación y Autorización (Simulada):**
      * El componente `Auth.js` simula el proceso de Login/Registro utilizando una API externa (`reqres.in`) para la validación de credenciales.
      * Utiliza `localStorage` para persistir el estado de la sesión (`token`, `rol`, `usuario`) entre recargas.
      * Implementa lógica de **Autorización** mostrando funciones administrativas (CRUD) solo si el usuario tiene el rol `ADMIN`.
  * **Gestión de Catálogo (CRUD Fullstack):**
      * El componente `Catalogo.js` lista los perfumes obtenidos del API backend.
      * Implementa los métodos **C**rear, **R**eer, **U**pdate y **D**elete de perfumes, delegando las peticiones a `fetch` y al API en Spring Boot.

-----

## 🛠️ Stack y Arquitectura

| Componente | Descripción | Detalles Técnicos |
| :--- | :--- | :--- |
| **Backend API** | PerfulandiaBackend (Spring Boot) | Esperado en `http://localhost:8080/api/perfumes`. |
| **Peticiones** | Comunicación con el API | Se utiliza la API nativa **`fetch`** con métodos `GET`, `POST`, `PUT`, `DELETE`. |
| **Estado Global** | `App.js` | Utiliza múltiples `useState` para gestionar la vista actual, el estado de `isLoggedIn`, y el rol `esAdmin`. |
| **Formularios** | `FormularioPerfume.js` | Implementa **formularios controlados** donde cada *input* está directamente enlazado al estado del componente a través de `value` y `onChange`. |
| **Estilos** | CSS Puro | Estilos modulares definidos en `App.css` y `Auth.css`. |

### Rutas Clave (Controladas por el Estado `vista`)

| Ruta Lógica | Componente | Descripción |
| :--- | :--- | :--- |
| `inicio` | JSX en `App.js` | Pantalla de bienvenida con promoción y sección "About" (autor). |
| `catalogo` | `Catalogo.js` | Muestra la lista de perfumes con lógica condicional para botones de edición/eliminación (solo Admin). |
| `detalle` | `Detalle.js` | Muestra información completa de un perfume, realizando un `GET /api/perfumes/{id}`. |
| `formulario` | `FormularioPerfume.js` | Formulario unificado para la creación (`POST`) y edición (`PUT`) de perfumes. |
| `auth` | `Auth.js` | Pantalla de autenticación para Login/Registro. |

-----

## 🚀 Cómo ejecutar el proyecto

Para interactuar con el CRUD, es fundamental que el backend esté activo.

### 1\. Iniciar el Backend

Asegúrate de que el proyecto **PerfulandiaBackend** esté corriendo en `http://localhost:8080` (usando `mvn spring-boot:run`).

### 2\. Iniciar el Frontend

1.  Clonar este repositorio.
2.  Instalar las dependencias:
    ```bash
    npm install
    ```
3.  Ejecutar la aplicación:
    ```bash
    npm start
    ```
    La aplicación se abrirá en tu navegador, probablemente en `http://localhost:3000` o `http://localhost:5173`.

### 🔑 Credenciales de Prueba (Auth.js)

Para acceder a la vista de administrador y probar el CRUD completo (Crear, Editar, Eliminar):

| Rol | Correo | Contraseña (Mock) |
| :--- | :--- | :--- |
| **ADMIN** (Activa CRUD) | `eve.holt@reqres.in` | `cityslicka` |
| **USER** (Solo Lectura) | Cualquier otro correo de `reqres.in` | (Cualquier contraseña) |

-----

## 👨‍💻 Autor

  * **Alonso Rivadeneira Barrales**
  * **Asignatura:** DSY1104 - Desarrollo Fullstack II
  * **Institución:** Duoc UC
