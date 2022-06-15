
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    handleHealthList = () => {
      const message = this.createChatBotMessage(
        "Having a healthy lifestyle can make you feel better mentally and physically, it can help lift your mood and makes you feel in control of your life! We've got the following resources for you on healthy living:",
        {
          widget: "healthLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleStressList = () => {
        const message = this.createChatBotMessage(
          "Sometimes, a small amount of stress can help us to complete tasks and feel more energised. But stress can become a problem when it lasts for a long time or is very intense. In some cases, stress can affect our physical and mental health. We've got the following resources for you on Stress management:",
          {
            widget: "stressLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleMindfulList = () => {
        const message = this.createChatBotMessage(
          "A good reason why mindfulness is important, is that it can help us to find balance in our perspective of the world as it encourages us to practice gratitude. This is not about denying the difficulties that we or others in the world are facing, but it does encourage us to broaden our perceptions. We've got the following resources for you on Being Mindful:",
          {
            widget: "mindfulLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

      handleSafetyList = () => {
        const message = this.createChatBotMessage(
          "Safety is important for moral reasons: Morally speaking, no one want to get hurt, and no one is happy that someone else gets hurt. We've got the following rescources for you on Safety",
          {
            widget: "safetyLinks",
          }
        );
    
        this.updateChatbotState(message);
      };


    updateChatbotState(message) {
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;