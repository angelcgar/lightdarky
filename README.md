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

### Agregar estilos CSS
Asegúrate de definir los estilos para los temas claro y oscuro en tu CSS:

```css
@import "tailwindcss";

/* === Variantes personalizadas === */
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

/* === Variables de color para temas === */
:root,
html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #1a1a1a;
  --accent: #3b82f6; /* azul Tailwind-500 */
  --muted: #e5e7eb;  /* gray-200 */
  --border: #d1d5db; /* gray-300 */
}

html[data-theme="dark"] {
  --background: #111827; /* gray-900 */
  --foreground: #f3f4f6; /* gray-100 */
  --accent: #f59e0b;     /* amber-500 */
  --muted: #374151;      /* gray-700 */
  --border: #4b5563;     /* gray-600 */
}

/* === Mapear variables a tokens de Tailwind === */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-muted: var(--muted);
  --color-border: var(--border);
}
```

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
