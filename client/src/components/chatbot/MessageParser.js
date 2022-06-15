class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const messageTitle = message.toLowerCase().trim();
  // define all the login part here 
      if (messageTitle.includes("1") || messageTitle.includes("Healthy living") || messageTitle.includes("healthy") || messageTitle.includes("living")) {
        this.actionProvider.greet();
      }
    }
  }
  export default MessageParser;