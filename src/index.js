class IaneticChat {
  constructor(options = {}) {
    this.options = {
      position: 'bottom-right',
      theme: 'light',
      title: 'Chat',
      placeholder: 'Escribe un mensaje...',
      ...options
    };
    
    this.messages = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createStyles();
    this.createChatWidget();
    this.attachEventListeners();
  }

  createStyles() {
    const styles = `
      .ianetic-chat-widget {
        position: fixed;
        z-index: 9999;
        max-width: 350px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      }
      .ianetic-chat-widget.bottom-right {
        bottom: 20px;
        right: 20px;
      }
      .ianetic-chat-button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #0084ff;
        cursor: pointer;
        box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }
      .ianetic-chat-button:hover {
        transform: scale(1.1);
      }
      .ianetic-chat-window {
        display: none;
        background: white;
        border-radius: 12px;
        box-shadow: 0 5px 40px rgba(0,0,0,0.16);
        overflow: hidden;
        margin-bottom: 20px;
      }
      .ianetic-chat-window.open {
        display: block;
      }
      .ianetic-chat-header {
        background: #0084ff;
        color: white;
        padding: 15px;
        font-weight: bold;
      }
      .ianetic-chat-messages {
        height: 300px;
        overflow-y: auto;
        padding: 15px;
      }
      .ianetic-chat-input {
        border-top: 1px solid #eee;
        padding: 15px;
        display: flex;
      }
      .ianetic-chat-input input {
        flex: 1;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 8px 15px;
        margin-right: 10px;
        outline: none;
      }
      .ianetic-chat-input button {
        background: #0084ff;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 8px 15px;
        cursor: pointer;
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  createChatWidget() {
    const widget = document.createElement('div');
    widget.className = `ianetic-chat-widget ${this.options.position}`;
    
    widget.innerHTML = `
      <div class="ianetic-chat-window">
        <div class="ianetic-chat-header">${this.options.title}</div>
        <div class="ianetic-chat-messages"></div>
        <div class="ianetic-chat-input">
          <input type="text" placeholder="${this.options.placeholder}">
          <button>Enviar</button>
        </div>
      </div>
      <div class="ianetic-chat-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      </div>
    `;

    document.body.appendChild(widget);
    this.widget = widget;
  }

  attachEventListeners() {
    const button = this.widget.querySelector('.ianetic-chat-button');
    const input = this.widget.querySelector('input');
    const sendButton = this.widget.querySelector('button');
    const chatWindow = this.widget.querySelector('.ianetic-chat-window');

    button.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      chatWindow.classList.toggle('open');
    });

    const sendMessage = () => {
      const text = input.value.trim();
      if (text) {
        this.addMessage({ text, sender: 'user' });
        input.value = '';
        // Aquí se puede agregar la lógica para enviar el mensaje al servidor
        this.options.onMessage?.(text);
      }
    };

    sendButton.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  addMessage({ text, sender }) {
    const messagesContainer = this.widget.querySelector('.ianetic-chat-messages');
    const messageElement = document.createElement('div');
    messageElement.style.cssText = `
      margin: 10px 0;
      padding: 10px;
      border-radius: 10px;
      max-width: 80%;
      ${sender === 'user' ? 'margin-left: auto; background: #0084ff; color: white;' : 'background: #f1f0f0;'}
    `;
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    this.messages.push({ text, sender });
  }
}

export default IaneticChat; 