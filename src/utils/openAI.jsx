import OpenAI from 'openai';
import { openAI_Key } from './Constant';

const openAI = new OpenAI({
  apiKey:openAI_Key,
  dangerouslyAllowBrowser: true , 
});

export default openAI; 