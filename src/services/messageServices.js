// messageService.js

class MessageService {
    constructor() {
      this.messages = []; // Array para armazenar as mensagens temporariamente
    }

    createMessage(title, fullName, message) {
      // Cria uma nova mensagem e a adiciona ao array de mensagens
      const newMessage = {
        title,
        fullName,
        message,
      };
      this.messages.push(newMessage);
      return newMessage;
    }

    getMessages() {
      // Retorna todas as mensagens
      return this.messages;
    }

    getMessage(messageId) {
      // Retorna uma mensagem pelo seu índice no array (0-based)
      if (messageId >= 0 && messageId < this.messages.length) {
        return this.messages[messageId];
      }
      return null;
    }

    updateMessage(messageId, title, fullName, message) {
      // Atualiza uma mensagem existente pelo seu índice no array (0-based)
      if (messageId >= 0 && messageId < this.messages.length) {
        const updatedMessage = {
          title,
          fullName,
          message,
        };
        this.messages[messageId] = updatedMessage;
        return updatedMessage;
      }
      return null;
    }

    deleteMessage(messageId) {
      // Remove uma mensagem pelo seu índice no array (0-based)
      if (messageId >= 0 && messageId < this.messages.length) {
        const deletedMessage = this.messages.splice(messageId, 1);
        return deletedMessage[0];
      }
      return null;
    }
  }

  module.exports = MessageService;
