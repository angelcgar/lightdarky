# lightdarky

Alterna fácilmente entre temas claro y oscuro en cualquier proyecto web usando JavaScript puro.

## Instalación

```sh
pnpm add lightdarky
# o
npm install lightdarky
# o
yarn add lightdarky
```

## Uso básico

1. Agrega un botón en tu HTML:

```html
<button id="theme-btn" aria-label="light">🌗</button>
```

2. Inicializa el togle en tu código:

```js
import { initThemeToggle } from "lightdarky";

initThemeToggle();
```

Esto habilita el cambio de tema al hacer clic en el botón con id `theme-btn` y sincroniza el tema con las preferencias del sistema y el almacenamiento local.

## Opciones avanzadas

Puedes personalizar el selector del botón y el esquema por defecto:

```js
initThemeToggle({
  buttonSelector: "#mi-boton-tema", // selector CSS personalizado
  defaultScheme: "dark" // "light" o "dark"
});
```

## Alternar el tema manualmente

La función retorna un método para alternar el tema desde tu código:

```js
const toggle = initThemeToggle();
toggle(); // Cambia el tema manualmente
```

## Accesibilidad y buenas prácticas

- El atributo `aria-label` del botón se actualiza automáticamente.
- El color de fondo se sincroniza con la meta `theme-color` para una mejor integración en dispositivos móviles.

## Licencia

MIT
