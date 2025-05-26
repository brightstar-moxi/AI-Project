const{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai")

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-pro-preview-05-06',
});

const generationConfig = {
    temperature: 1,
    topP:0.95,
    topK: 64,
maxOutputTokens: 8192,
};



export const chatSession = model.startChat({
    generationConfig, // Ensure this is defined earlier in your code or import it appropriately
  
    history: [
      {
        role: 'user',
        parts: [
          {
            text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`,
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: JSON.stringify([
              {
                imagePrompt: "A bustling marketplace in a once vibrant, ancient desert city, now rediscovered and teeming with traders from across the galaxies, exotic wares, and strange creatures.",
                contentText: "The rediscovered city springs to life as the universe's traders bring its history back to the present.",
              },
            ], null, 2),
          },
        ],
      },
    ],
  });







// To run this code, ensure the following dependencies are installed:
// npm install @google/genai mime
// npm install -D @types/node (optional if you need TypeScript type definitions)







// const { GoogleGenAI } = require('@google/genai');

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//   });

//   const config = {
//     responseMimeType: 'application/json',
//   };

//   const model = 'gemini-2.5-pro-preview-05-06';
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
//           text: `**Comprehending the Task**

// I'm currently focused on fully understanding the parameters for the video script generation. My initial goal is to create a 30-second script about an interesting historical story, formatted as JSON. I'm carefully reviewing these elements to ensure I meet the exact requirements.

// **Deconstructing the Narrative**

// I'm now fully immersed in dissecting the Phoebe Hessel story. It seems perfectly suited for the 30-second timeframe. I'm focusing on identifying key visual moments and emotional beats for each of the six scenes, aiming for a compelling narrative arc within the limited duration. I'm thinking of how to best represent her journey.

// **Mapping Out Scenes**

// I've further refined my approach, zeroing in on the narrative structure. Scene breakdowns are now complete, with visual and textual elements carefully considered for each of the six scenes I've defined. The focus is on a natural flow, ensuring a compelling story arc within the strict time constraints. I'm now structuring the JSON data with prompts that capture the essence of each scene, aiming for visual interest and emotional depth.

// **Crafting Scene Prompts**

// I'm now focused on constructing the image prompts. I'm taking the detailed text descriptions and integrating historical research to create compelling, realistic images that encapsulate each moment. I'm carefully considering camera angles, lighting, and shot types to ensure the visuals will align with the narrative I've constructed. I'm aiming for high visual fidelity and narrative accuracy.

// **Refining Scene Content**

// I'm now fully immersed in developing the JSON script, scene-by-scene. The story of Phoebe Hessel is coming together nicely. I've fleshed out the content text for each scene, ensuring a concise and engaging narrative within the time constraints. Each scene's visual elements are also further detailed. I'm focusing on crafting compelling and impactful descriptions for each scene.

// **Fine-tuning the Script**

// I'm now deep into refining the scene content and image prompts.  I've checked the flow of the script to ensure it's both historically accurate and engaging within the time limit. I'm focusing on ensuring the visual prompts provide a strong foundation for a compelling 30-second video that does justice to Phoebe Hessel's incredible life.

// **Fine-Tuning the Story**

// I'm now iterating on the scene content and image prompts. I've re-reviewed the narrative for Phoebe Hessel, ensuring a cohesive and compelling flow within the 30-second time constraint. The image prompts have been refined to be more specific and historically accurate. I'm focusing on ensuring visual interest while maintaining narrative clarity.
// `,
//         },
//         {
//           text: `Okay, here's a script for a 30-second video about the "Dancing Plague of 1518," broken down into 6 scenes (approximately 5 seconds each).

// \`\`\`json
// {
//   "videoTitle": "The Dancing Plague of 1518",
//   "scenes": [
//     {
//       "sceneNumber": 1,
//       "durationSeconds": 5,
//       "imagePrompt": "Realistic photo, Strasbourg, 1518. A lone woman, Frau Troffea, begins to dance uncontrollably in a dusty medieval street. Townsfolk look on with confusion and concern. Summer day, cobblestone street, timber-framed houses. Cinematic, slightly low angle shot. Highly detailed.",
//       "contentText": "Strasbourg, 1518. A woman named Frau Troffea steps into the street and begins to dance, tirelessly, inexplicably."
//     },
//     {
//       "sceneNumber": 2,
//       "durationSeconds": 5,
//       "imagePrompt": "Realistic photo, medieval Strasbourg street, a few days later. A small group of people, now including Frau Troffea, are dancing manically, expressions of exhaustion and desperation. Onlookers appear worried. Overcast sky, detailed period clothing. Medium shot capturing the dancers.",
//       "contentText": "Within days, dozens joined her, unable to stop their frenzied movements, dancing day and night."
//     },
//     {
//       "sceneNumber": 3,
//       "durationSeconds": 5,
//       "imagePrompt": "Realistic photo, interior of a medieval town hall. Concerned city officials and physicians in dark robes discuss the situation around a heavy wooden table, looking at scrolls. Candlelight, serious expressions. Cinematic, moody lighting. Close-up on their worried faces.",
//       "contentText": "Authorities were baffled. Initially, they encouraged more dancing, even hiring musicians, believing it would cure them."
//     },
//     {
//       "sceneNumber": 4,
//       "durationSeconds": 5,
//       "imagePrompt": "Realistic photo, a makeshift stage in a Strasbourg market square, 1518. Hundreds of people are now dancing erratically, some collapsing from exhaustion. Musicians play frantically. Crowd watching with horror. Gritty, chaotic scene. Wide shot, high angle view.",
//       "contentText": "But the 'Dancing Plague' spread, with up to 400 people consumed by the uncontrollable urge to dance."
//     },
//     {
//       "sceneNumber": 5,
//       "durationSeconds": 5,
//       "imagePrompt": "Realistic photo, a dancer in tattered clothes collapsing on the cobblestone street, surrounded by other exhausted dancers. Sunlight breaking through clouds. Extreme close-up on a sweat-drenched, exhausted face. Raw, emotional.",
//       "contentText": "Many suffered heart attacks, strokes, or died from sheer exhaustion. The dancing continued for over a month."
//     },
//     {
//       "sceneNumber": 6,
//       "durationSeconds": 5,
//       "imagePrompt": "Realistic photo, a historical scholar looking at an old manuscript about the Dancing Plague in a dimly lit library. Bookshelves in the background. Contemplative mood, focused lighting on the manuscript. Over-the-shoulder shot.",
//       "contentText": "To this day, the exact cause remains a mystery – mass hysteria, ergot poisoning, or a stress-induced psychosis?"
//     }
//   ]
// }
// \`\`\`` },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [{ text: `INSERT_INPUT_HERE` }],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });

//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();
