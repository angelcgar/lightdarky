// src/themeToggle.ts

/**
 * Inicializa el togle de tema claro/oscuro.
 * @param options Opciones para personalizar el selector y el esquema por defecto.
 * @returns Una función para alternar el tema manualmente.
 */
export function initThemeToggle(options?: {
    buttonSelector?: string;
    defaultScheme?: "light" | "dark";
}) {
    const buttonSelector = options?.buttonSelector || "#theme-btn";
    const primaryColorScheme = options?.defaultScheme || "";

    function getPreferTheme() {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) return currentTheme;
        if (primaryColorScheme) return primaryColorScheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    let themeValue = getPreferTheme();

    function setPreference() {
        localStorage.setItem("theme", themeValue);
        reflectPreference();
    }

    function reflectPreference() {
        document.firstElementChild?.setAttribute("data-theme", themeValue);
        document.querySelector(buttonSelector)?.setAttribute("aria-label", themeValue);
        const body = document.body;
        if (body) {
            const computedStyles = window.getComputedStyle(body);
            const bgColor = computedStyles.backgroundColor;
            document
                .querySelector("meta[name='theme-color']")
                ?.setAttribute("content", bgColor);
        }
    }

    // Inicializa el tema al cargar
    reflectPreference();

    function toggleTheme() {
        themeValue = themeValue === "light" ? "dark" : "light";
        setPreference();
    }

    function setThemeFeature() {
        reflectPreference();
        document.querySelector(buttonSelector)?.addEventListener("click", toggleTheme);
    }

    if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", setThemeFeature);
    } else {
        setThemeFeature();
    }

    // Sincroniza con cambios del sistema
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
        themeValue = isDark ? "dark" : "light";
        setPreference();
    });

    // Devuelve función para alternar manualmente
    return toggleTheme;
}
