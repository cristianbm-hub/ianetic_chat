# Ianetic Chat

[![npm version](https://badge.fury.io/js/ianetic-chat.svg)](https://badge.fury.io/js/ianetic-chat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un widget de chat ligero y fácil de integrar en cualquier sitio web.

## Características

- 🚀 Ligero y rápido
- 🎨 Diseño moderno y responsive
- 📱 Compatible con móviles
- 🔌 Fácil integración
- ⚙️ Altamente personalizable
- 🌐 Compatible con todos los navegadores modernos

## Instalación

### Vía NPM

```bash
npm install ianetic-chat
```

### Vía CDN

```html
<script src="https://unpkg.com/ianetic-chat"></script>
```

## Uso

### Con módulos ES6

```javascript
import IaneticChat from 'ianetic-chat';

const chat = new IaneticChat({
  title: 'Mi Chat',
  placeholder: 'Escribe tu mensaje...',
  position: 'bottom-right', // o 'bottom-left'
  onMessage: (text) => {
    // Maneja los mensajes aquí
    console.log('Mensaje enviado:', text);
  }
});
```

### Con CDN

```html
<script>
  const chat = new IaneticChat({
    title: 'Mi Chat',
    placeholder: 'Escribe tu mensaje...',
    position: 'bottom-right',
    onMessage: (text) => {
      console.log('Mensaje enviado:', text);
    }
  });
</script>
```

## Opciones

| Opción | Tipo | Por defecto | Descripción |
|--------|------|-------------|-------------|
| title | string | 'Chat' | Título del chat |
| placeholder | string | 'Escribe un mensaje...' | Texto del placeholder del input |
| position | string | 'bottom-right' | Posición del widget ('bottom-right' o 'bottom-left') |
| onMessage | function | undefined | Callback que se ejecuta cuando se envía un mensaje |

## Métodos

### addMessage(options)

Añade un mensaje al chat.

```javascript
chat.addMessage({
  text: 'Hola, ¿en qué puedo ayudarte?',
  sender: 'bot' // 'bot' o 'user'
});
```

## Ejemplos

Puedes encontrar ejemplos de implementación en la carpeta `/example` del repositorio.

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

1. Fork el repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

MIT