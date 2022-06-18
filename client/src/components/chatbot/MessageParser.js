class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hey") ||
      lowerCaseMessage.includes("hi")
    ) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("health")) {
      this.actionProvider.handleHealthList();
    }
    if (
      lowerCaseMessage.includes("stress") ||
      lowerCaseMessage.includes("worried") ||
      lowerCaseMessage.includes("anxiety")
    ) {
      this.actionProvider.handleStressList();
    }
    if (lowerCaseMessage.includes("mindful")) {
      this.actionProvider.handleMindfulList();
    }
    if (
      lowerCaseMessage.includes("safety") ||
      lowerCaseMessage.includes("safe")
    ) {
      this.actionProvider.handleSafetyList();
    }
    if (
      lowerCaseMessage.includes("thank you") ||
      lowerCaseMessage.includes("bye") ||
      lowerCaseMessage.includes("thank")
    ) {
      this.actionProvider.handleGoodbye();
    }
  }
}
export default MessageParser;
