class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const messageTitle = message.toLowerCase().trim();
// define all the login part here 
    if (messageTitle.includes("hello") || messageTitle.includes("hey")) {
      this.actionProvider.greet();
    }
  }
}
export default MessageParser;
