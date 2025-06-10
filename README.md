# Angular Login Example

Este repositorio contiene una estructura b\u00e1sica para una p\u00e1gina de login en Angular. Incluye componentes, servicios y modelos m\u00ednimos para autenticar un usuario.

```
src/
  app/
    app.module.ts
    core/
      services/
        auth.service.ts
    features/
      auth/
        auth.module.ts
        login/
          login.component.ts
          login.component.html
          login.component.css
    models/
      user.ts
```

El servicio `AuthService` expone un m\u00e9todo `login` que deber\u00eda conectarse con tu API real. El componente `LoginComponent` ofrece un formulario b\u00e1sico de usuario y contrase\u00f1a.

Este c\u00f3digo est\u00e1 pensado como ejemplo de organizaci\u00f3n y no como implementaci\u00f3n final de seguridad.
