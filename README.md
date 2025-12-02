# 🎮✨ **¡Bienvenido a 2048 — Pink Edition!** ✨🎮

Una recreación moderna, responsiva y visualmente pulida del clásico puzzle de deslizamiento que ha cautivado a millones de jugadores.

Este proyecto combina **JavaScript modular**, **HTML**, **CSS**, y un entorno completamente empaquetado con **Docker**, para garantizar que puedas ejecutarlo en cualquier máquina con un solo comando.

---

## 🧩 ¿Qué es 2048?

**2048** es un juego de rompecabezas en un tablero de **4×4**, donde el jugador desliza fichas numeradas para combinarlas y crear números mayores.
El objetivo es llegar a la famosa ficha **2048**.

Cada movimiento es importante:

* combina fichas 💥
* planea tu estrategia 🧠
* evita quedarte sin movimientos ❌

---

## 🌟 Características Principales

✔️ Interfaz moderna inspirada en apps móviles
✔️ Paleta de colores pastel (con tonos de rosa)
✔️ Animaciones suaves para movimiento y combinaciones
✔️ Diseño completamente responsivo (PC/Móvil)
✔️ Arquitectura modular en JavaScript
✔️ Docker-ready: listo para correr en un solo comando
✔️ Código claro y fácil de extender

---

## 📂 Estructura del Proyecto

```
2048-game
├── src
│   ├── css
│   │   └── style.css          # Estilos visuales
│   ├── js
│   │   ├── board.js           # Lógica del tablero
│   │   ├── game.js            # Controlador principal
│   │   ├── tile.js            # Clase Tile
│   │   └── ui.js              # Actualización de la interfaz
│   └── index.html             # Estructura HTML del juego
├── Dockerfile                  # Imagen Docker
├── docker-compose.yml          # Configuración Docker
├── package.json                # Dependencias y scripts
├── package-lock.json           # Versionado de dependencias
```

---

## 🚀 Instalación y Ejecución con Docker

Este proyecto está pensado para ejecutarse sin configuraciones complicadas.

### 📦 1. Clona el repositorio

```bash
git clone <repository-url>
```

### 📁 2. Ingresa a la carpeta del proyecto

```bash
cd 2048-game
```

### 🏗️ 3. Construye y ejecuta el contenedor

```bash
docker compose build
docker compose up
```

### ▶️ 4. Abre el juego en tu navegador

👉 `http://localhost:8081`

### 🛑 5. Para detener la aplicación

```bash
Ctrl + C
docker compose down
```

---

## 🕹️ Cómo Jugar

1. Abre el juego en tu navegador.
2. Usa las **flechas del teclado** para mover las fichas (o gestos táctiles en móvil).
3. Dos fichas iguales se combinan formando una ficha mayor.
4. Acumula puntaje y trata de alcanzar la ficha **2048**.
5. El juego termina si ya no quedan movimientos posibles.

---

## 🔍 Mecánicas del Juego

* ⭐ Comienzas con **dos fichas** de valor **2 o 4**.
* 🔄 Cada movimiento desliza todas las fichas en la dirección elegida.
* 💥 Fichas iguales se fusionan sumando sus valores.
* 📈 El puntaje aumenta según el valor creado al fusionar.
* 🏆 Ganas al conseguir la ficha **2048**.
* ☠️ Pierdes si no quedan movimientos posibles.

---

## 📱 Diseño Responsivo

El juego está optimizado para:

* 🖥️ Pantallas grandes (PC, laptops)
* 📱 Teléfonos móviles
* 📲 Tablets

La cuadrícula siempre mantiene proporciones estéticas, con fichas suaves, colores agradables y tipografías claras.

---

## 🎨 Paleta de Colores (Tonos Rosados)

Las fichas del juego utilizan colores suaves basados en tonos rosa:

* `2`  → rosa claro pastel
* `4`  → rosa durazno
* `8`  → rosa salmón
* `16` → rosa más intenso
* `32+` → gradientes rosados más saturados

Esto crea una experiencia visual hermosa, limpia y accesible.

---

## 🤝 Contribuciones

¡Las contribuciones siempre son bienvenidas!
Puedes ayudar con:

* Nuevas características
* Corrección de bugs
* Mejoras en accesibilidad
* Mejoras visuales
* Optimización del rendimiento

Para contribuir:

1. Haz un fork del repositorio
2. Crea una rama específica para tu feature
3. Envía un Pull Request ✨

---

## 📝 Licencia

Este proyecto es completamente libre para usar, estudiar y mejorar.
Incluye los archivos necesarios para ejecutarse en cualquier entorno.

---

## 💬 Contacto

Si tienes dudas, mejoras o sugerencias, ¡no dudes en abrir un issue o enviarme un mensaje!

