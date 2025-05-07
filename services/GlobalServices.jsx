import axios from "axios"
import OpenAI from "openai"
import { CoachingOptions } from "./Options";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

export const getToken = async () => {
    const result = await axios.get('/api/getToken');
    return result.data;
}

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_PUBLIC_AI_OPENROUTER,
    dangerouslyAllowBrowser: true,
})

export const AIModel = async (topic, coachingOption, lastTwoConversation) => {

    const option = CoachingOptions.find((item) => item.name === coachingOption);
    const PROMPT = (option.prompt).replace('{user_topic}', topic);

    // Check if there's any previous conversation
    // if (lastTwoConversation && lastTwoConversation.length > 0) {
    //     // If there's history, we'll use a slightly different prompt
    //     // that focuses on continuing the conversation.
    //     PROMPT = `Continue the interview based on the previous turns. The user's topic is: ${topic}.`;
    // }

    const completion = await openai.chat.completions.create({
        model: "google/gemma-3-1b-it:free",
        messages: [
            { role: 'assistant', content: PROMPT },
            ...lastTwoConversation
        ],
    })

    // console.log(completion.choices[0].message)
    // return completion.choices[0].message;

    // if (completion?.error) {
    //     if (completion.error.code === 429) {
    //         return {
    //             role: 'assistant',
    //             content: "We're currently at capacity. Please try again in a few hours."
    //         };
    //     }
    
    //     console.error('OpenRouter API Error:', completion.error);
    //     return {
    //         role: 'assistant',
    //         content: "Sorry, an error occurred. Please try again later."
    //     };
    // }
    

    if (completion?.choices?.[0]?.message) {
        return completion.choices[0].message;
    } else {
        console.error('Invalid AI response:', completion);
        return { role: 'assistant', content: "Sorry, I couldn't get a proper response. Please try again!" };
    }

}

export const AIModelToGenerateFeedbackAndNotes = async (coachingOption, conversation) => {

    const option = CoachingOptions.find((item) => item.name === coachingOption);
    const PROMPT = (option.summeryPrompt)

    console.log("conversation: ", conversation);

    const completion = await openai.chat.completions.create({
        model: "google/gemma-3-1b-it:free",
        messages: [
            ...conversation,
            { role: 'user', content: PROMPT },
        ],
    })

    // 3.24.000 ------------------------

    console.log("completion[0]: ", completion.choices[0].message)
    return completion?.choices[0].message;
}

export const ConvertTextToSpeech = async (text, expertName) => {
    const pollyClient = new PollyClient({
        region: 'ap-south-1',
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECREAT_KEY,
        }
    })

    const command = new SynthesizeSpeechCommand({
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: expertName
    })

    try {
        const { AudioStream } = await pollyClient.send(command)
        const audioArrayBuffer = await AudioStream.transformToByteArray();
        const audioBlob = new Blob([audioArrayBuffer], { type: 'audio/mp3' })

        const audioUrl = URL.createObjectURL(audioBlob);
        return audioUrl;

    } catch (e) {
        console.log("error: ", e);
    }
}