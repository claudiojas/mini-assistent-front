const API_URL = ' http://localhost:3000/task';

export const sendMessage = async (text: string ): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return data.result.message || 'Você poderia repetir a pergunta, por favor!';
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};