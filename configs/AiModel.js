// const{
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/genai")

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: 'gemini-1.5-flash',
// });

// const generationConfig = {
//     temperature: 1,
//     topP:0.95,
//     topK: 64,
// maxOutputTokens: 8192,
// responseMimeType:'application/json'
// };



// export const chatSession = model.startChat({
//     generationConfig, // Ensure this is defined earlier in your code or import it appropriately
  
//     history: [
//       {
//         role: 'user',
//         parts: [
//           {
//             text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`,
//           },
//         ],
//       },
//       {
//         role: 'model',
//         parts: [
//           {
//             text: JSON.stringify([
//               {
//                 imagePrompt: "A bustling marketplace in a once vibrant, ancient desert city, now rediscovered and teeming with traders from across the galaxies, exotic wares, and strange creatures.",
//                 contentText: "The rediscovered city springs to life as the universe's traders bring its history back to the present.",
//               },
//             ], null, 2),
//           },
//         ],
//       },
//     ],
//   });

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';


// const ai = new GoogleGenAI({
//   apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
// });
// const config = {
//   responseMimeType: 'application/json',
// };
// const model = 'gemini-2.5-pro-preview-05-06';
// const contents = [
//   {
//     role: 'user',
//     parts: [
//       {
//         text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`,
//       },
//       {
//         role: 'model',
//         parts: [
//           {
//             text: JSON.stringify([
//               {
//                 imagePrompt: "A bustling marketplace in a once vibrant, ancient desert city, now rediscovered and teeming with traders from across the galaxies, exotic wares, and strange creatures.",
//                 contentText: "The rediscovered city springs to life as the universe's traders bring its history back to the present.",
//               },
//             ], null, 2),
//           },
//         ],
//       },
//     ],
//   },
// ];


//  export const charrt =  ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
 

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';


//   const ai = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
//   });
//   const config = {
//     responseMimeType: 'application/json',
//   };
//   const model = 'gemini-1.5-flash';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `\`\`\`json
// {
//       "imagePrompt": "Realistic photograph, 1932 Australia, sun-baked wheat fields stretching to the horizon. A group of desperate, weathered farmers in period clothing look on as a massive flock of emus (at least 20 visible) devours their crops. Dust in the air, harsh sunlight. Cinematic, slightly desaturated colors.",
//       "contentText": "In 1932, Western Australia faced a peculiar invasion. Post-WWI, thousands of emus migrated to farmlands, devastating crops."
//     },
   
// \`\`\``,
//         },
//       ],
//     },
    
//   ];

//   export const charrt = ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });



// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// }=require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP:0.95,
//   topK:64,
//   maxOutputTakens:8192,
//   responseMimeType: "application/json"
// };

// export const chatSession = model.startChat({
//   generationConfig,
//   // safetySettings:Adjust safety settings
//   // see https://ai.google.dev/gemini-api/docs/safety-settings
//   history:[
//     {
//             role: 'user',
//             parts: [
//               {
//                 text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`,
//               },
//             ],
//           },
//           {
//             role: 'model',
//             parts: [
//               {
//                 text: `\`\`\`json
//       {
//             "imagePrompt": "Realistic photograph, 1932 Australia, sun-baked wheat fields stretching to the horizon. A group of desperate, weathered farmers in period clothing look on as a massive flock of emus (at least 20 visible) devours their crops. Dust in the air, harsh sunlight. Cinematic, slightly desaturated colors.",
//             "contentText": "In 1932, Western Australia faced a peculiar invasion. Post-WWI, thousands of emus migrated to farmlands, devastating crops."
//           },
         
//       \`\`\``,
//               },
//             ],
//           },
//   ]
//   })



// Use import statements
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192, // Corrected typo
  responseMimeType: "application/json"
};

// Export as an ES module export
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [{ text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field` }],
    },
    {
      role: 'model',
      parts: [{ text: `\`\`\`json

{
            "imagePrompt": "Realistic photograph, 1932 Australia, sun-baked wheat fields stretching to the horizon. A group of desperate, weathered farmers in period clothing look on as a massive flock of emus (at least 20 visible) devours their crops. Dust in the air, harsh sunlight. Cinematic, slightly desaturated colors.",
            "contentText": "In 1932, Western Australia faced a peculiar invasion. Post-WWI, thousands of emus migrated to farmlands, devastating crops."
          },
         
      \`\`\``,
              },
            ],
          },
  ]
  })
