import { Sparkles } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  imageUrl: string;
  summary: string[];
  insight: string;
  url: string;
  source: string;
  publishedAt: string;
}

export async function getDailyAINews(): Promise<NewsItem[]> {
  // 사용자의 요청에 따라 하드코딩된 뉴스 데이터로 렌더링
  return [
    {
      id: "1",
      title: "🔥 미국 핫이슈: 챗GPT에서 이제 광고도 본다고? 오픈AI, 광고 플랫폼 출시!",
      imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800",
      summary: [
        "야, 맨날 공짜로 쓰던 챗GPT 있잖아? 이제 거기에도 유튜브처럼 광고가 붙을지도 모른대!",
        "오픈AI가 회사들이 직접 광고를 넣을 수 있는 '애즈 매니저'라는 걸 새로 만들었다나 봐. 완전 돈독 올랐지? ㅋㅋㅋ",
        "앞으로 챗GPT랑 떠들다 보면 갑자기 신발 광고 같은 게 튀어나올 수도 있다는 거야. 세상에 공짜는 없네 진짜!"
      ],
      insight: "친구야~ 대박 소식이야!\n챗GPT 안에서도 광고가 뜬대!\n기업들이 돈 싸들고 AI한테 몰리고 있대!\n조만간 네이버나 구글 같은 검색 시장도 AI가 싹 다 먹을걸? ㄷㄷ",
      url: "https://techcrunch.com/2024/05/13/openai-debuts-gpt-4o-its-fastest-model-yet/",
      source: "TechCrunch",
      publishedAt: new Date().toISOString()
    },
    {
      id: "2",
      title: "월스트리트 큰손들이 앤스로픽(Anthropic)에 2조 원 쐈다!",
      imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
      summary: [
        "클로드(Claude) 만든 앤스로픽 알지? 방금 미국 금융권 큰손들한테 무려 15억 달러, 우리 돈으로 2조 원을 투자받았대!",
        "이제 AI가 그냥 신기한 챗봇이 아니라, 진짜 돈 냄새 팍팍 나는 금융 회사들 일까지 다 대신해 주려고 각 잡고 있나 봐.",
        "게다가 스페이스X 데이터센터까지 쓴다는데, 완전 스케일 미쳤지? 오픈AI랑 피 터지게 싸울 듯 ㅋㅋㅋ"
      ],
      insight: "친구야~ 월가 알지?\n젤 깐깐한 거기도 AI에 엄청 투자한대!\n조단위로 막 돈 쓴대!\n이제 진짜 회사들도 AI가 무조건 대세야!\n안 쓰면 완전 뒤처질 각!",
      url: "https://techcrunch.com/2024/03/04/anthropic-announces-claude-3-its-next-gen-ai-model-family/",
      source: "TechCrunch",
      publishedAt: new Date(Date.now() - 3600000).toISOString() // 1시간 전
    },
    {
      id: "3",
      title: "인스타 만든 메타(Meta), 나만의 찐 맞춤형 AI 비서 '뮤즈 스파크' 준비 중!",
      imageUrl: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800",
      summary: [
        "인스타랑 페북 만든 메타가 이번엔 진짜 내 맘을 찰떡같이 알아주는 개인 비서 AI를 만들고 있대. 이름이 '뮤즈 스파크'래!",
        "폰이나 컴퓨터에 있는 여러 앱을 알아서 쏙쏙 넘나들면서 내 스케줄 챙겨주고 일도 대신 해주는 거지. 완전 영화 속 비서 아냐?",
        "맨날 인스타 스토리만 보던 메타가 이렇게 똑똑한 짓을 하다니, 이거 나오면 우리 생활 쌉편해질 듯 ㅋㅋㅋ"
      ],
      insight: "친구야~ 인스타 메타 알지?\n내 폰 앱들을 알아서 막 돌아다닌대!\n진짜 사람처럼 일해주는 완전 자율형 AI래!\n우리한테도 드디어 찐 비서 생기는 거야!\n완전 편하겠지 ㅋㅋㅋ",
      url: "https://www.theverge.com/2024/4/18/24133808/meta-ai-assistant-llama-3-chatgpt-openai-rival",
      source: "The Verge",
      publishedAt: new Date(Date.now() - 7200000).toISOString() // 2시간 전
    },
    {
      id: "4",
      title: "프랑스의 자존심 미스트랄(Mistral), 혼자서 일하는 '에이전트 모드' 떴다!",
      imageUrl: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=800",
      summary: [
        "미국 말고 유럽에서 제일 잘나가는 AI 회사 미스트랄이 이번에 개쩌는 새 모델(128B)을 내놨대!",
        "단순히 말만 대답하는 게 아니라, 지가 알아서 생각하고 여러 단계를 거쳐서 일을 끝내버리는 '에이전트 모드'가 생겼대. 미쳤지?",
        "맨날 미국 AI만 쓰다가 유럽 애들도 이렇게 똑똑한 거 만드니까 경쟁 존나 치열해질 것 같아. 우리 입장에선 땡큐지 뭐 ㅋㅋㅋ"
      ],
      insight: "친구야~ 소름 돋지 않아?\n이젠 AI한테 명령만 딱 내리면 지가 알아서 계획 짜고 일도 척척 끝내버린대!\n스스로 일하는 게 이제 완전 기본 옵션이래!\n세상 진짜 너무 빠르다!",
      url: "https://techcrunch.com/2024/02/26/mistral-ai-releases-a-new-flagship-model-and-a-chat-assistant/",
      source: "TechCrunch",
      publishedAt: new Date(Date.now() - 10800000).toISOString() // 3시간 전
    },
    {
      id: "5",
      title: "어휴 지루한 PDF 문서? 어도비(Adobe) AI가 다 요약해 주고 수다도 떨어줌!",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
      summary: [
        "학교나 회사에서 맨날 보는 그 지루한 PDF 문서 알지? 어도비가 여기에 완전 똑똑한 AI를 넣어버렸대!",
        "이제 수십 페이지짜리 문서 읽을 필요 없이, 그냥 '이 문서에서 젤 중요한 게 뭐야?' 하고 채팅으로 물어보면 다 알려준단다.",
        "심지어 'PDF 스페이스'라는 걸 만들어서 여러 문서 띄워놓고 AI랑 같이 공부도 할 수 있대. 와, 나 대학생 때 이거 있었으면 A+ 쌉가능인데 ㅋㅋㅋ"
      ],
      insight: "친구야~ 그 지루한 PDF!\n거기에도 이제 똑똑한 AI가 들어간대!\n질문하면 대답도 다 해주고 작업이 180도 완전 바뀐대!\n학생들 과제 꿀빨겠네!\n우리 땐 도대체 왜 없었냐 ㅠㅠ",
      url: "https://www.theverge.com/2024/4/15/24130834/adobe-acrobat-ai-assistant-pdf-reader-price",
      source: "The Verge",
      publishedAt: new Date(Date.now() - 14400000).toISOString() // 4시간 전
    }
  ];
}
