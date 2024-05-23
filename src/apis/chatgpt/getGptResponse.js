import OpenAI from "openai"

export const getGptResponse = async (request) => {
  try {
    const openai = new OpenAI({
      apiKey: `${import.meta.env.VITE_OPENAI_API_KEY}`,
      dangerouslyAllowBrowser: true,
    })

    const prompt = `나는 기부 인증글을 쓰려고 해. ${
      request.projectName
    }라는 프로젝트에 기부를 했어. 이 정보를 중심으로 100자 정도로 인증글을 써줘.`

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'gpt-3.5-turbo',
    })

    return response.choices[0].message.content
  } catch (error) {
    console.log('chatGPT: 🚨 에러가 발생했습니다.')
  }
}