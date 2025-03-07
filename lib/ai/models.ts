export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'Mistral Small',
    description: 'Fast and efficient Mistral AI model for everyday tasks',
  },
  {
    id: 'chat-model-large',
    name: 'Claude 3 Opus',
    description: 'Powerful Claude 3 model for complex analysis and generation',
  },
  {
    id: 'chat-model-reasoning',
    name: 'DeepSeek Reasoning',
    description: 'Specialized model with advanced reasoning capabilities'
  },
];
