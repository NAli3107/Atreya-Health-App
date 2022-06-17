// import React from "react";
// import { createChatBotMessage } from "react-chatbot-kit";
// import chatOptions from "./chatOptions"


// const config = {
//     botName: "Atreya specialists",
//   initialMessages: [createChatBotMessage('Hey there! Thank you for popping up today! Choose a topic to discuss: 1. Healthy living, 2. Stress/Worries, 3. Relaxing the mind and soul ',
//    {widget: chatOptions,
// }),
// ],


//  widgets: [
//      {
//      	widgetName: "chatOptions",
//     	widgetFunc: (props) => <chatOptions {...props} />,
//      },
//  ],
// };

// export default config;

import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import  "./chatOptions.css";
import LearningOptions from "./chatOptions";
import LinkList from "./LinkList";

const config = {
    botName: "Atreya",
// initialMessages:[
//   createChatBotMessage("humas test")
// ],
  initialMessages: [
    createChatBotMessage("Hey there! Thank you for popping up today! Choose a topic to find out more about:", {
      widget: "learningOptions",
    }),
  ],

 widgets: [
     {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
     {
        widgetName: "healthLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "The importance of Healthy living",
                url:
                  "https://health.gov/our-work/nutrition-physical-activity/presidents-council#:~:text=Good%20nutrition%20is%20an%20important%20part%20of%20leading,disease%20and%20cancer%29%2C%20and%20promote%20your%20overall%20health.",
                id: 1,
              },
              {
                text: "Regular Exercise",
                url:
                  "https://www.nhs.uk/live-well/exercise/",
                id: 2,
              },
              {
                text: "Healthy Eating",
                url: "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/",
                id: 3,
              },
            ],
          },
      },
      {
        widgetName: "stressLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "Stress Busters",
                url:
                  "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/",
                id: 1,
              },
              {
                text: "Anxiety and worries",
                url:
                  "https://www.nhs.uk/mental-health/conditions/anxiety/",
                id: 2,
              },
              {
                text: "Anger management",
                url: "https://www.nhsinform.scot/healthy-living/mental-wellbeing/anger-management/how-to-control-your-anger",
                id: 3,
              },
            ],
          },
      },
      {
        widgetName: "mindfulLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "What is mindfulness?",
                url:
                  "https://www.nhs.uk/mental-health/self-help/tips-and-support/mindfulness/",
                id: 1,
              },
              {
                text: "How to bring mindfulness in my life?",
                url:
                  "https://www.mindful.org/how-do-i-bring-more-mindfulness-into-my-life/",
                id: 2,
              },
              {
                text: "Mindful of others",
                url: "https://mindfulofthehome.com/how-to-be-mindful-of-others/",
                id: 3,
              },
            ],
          },
      },
      {
        widgetName: "safetyLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "The importance of Safety",
                url:
                  "https://www.reference.com/business-finance/safety-important-a3b361a3a5add64c",
                id: 1,
              },
              {
                text: "Be safe!",
                url:
                  "https://www.wikihow.com/Be-Safe",
                id: 2,
              },
              {
                text: "Make others feel safe",
                url: "https://www.psychologytoday.com/us/blog/your-wise-brain/202102/make-others-feel-safe-around-you#:~:text=Give%20the%20other%20person%20breathing%20room%2C%20space%20to,to%20help%20prevent%20or%20reduce%20fears%20in%20others./",
                id: 3,
              },
            ],
          },
 
      },
 ],

}

export default config;