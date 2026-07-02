export type ContactIconName = 'kakao' | 'phone' | 'location'

export type ContactCardConfig = {
  id: string
  icon: ContactIconName
  title: string
  description: readonly string[]
  actionLabel: string
  href?: string
  external?: boolean
  address?: string
}

export type ContactConfig = {
  businessName: string
  kakaoTalkUrl: string
  telephoneNumber: string
  businessAddress: string
  mapUrl: string
  businessHours?: string
  consultationMessage?: string
  sectionTitle: string
  sectionSubtitle: string
  cards: readonly ContactCardConfig[]
}

const kakaoTalkUrl = 'https://pf.kakao.com/_example'
const telephoneNumber = '02-1234-5678'
const businessAddress = '경산북도 경산시 영남대학교 컴공 갈길없다'
const mapUrl = 'https://maps.google.com/?q=Seoul'

export const contactConfig = {
  businessName: 'Bloom Skin Clinic',
  kakaoTalkUrl,
  telephoneNumber,
  businessAddress,
  mapUrl,
  businessHours: '월요일 - 토요일 10:00 - 19:00',
  consultationMessage: '상담은 운영 시간 내 순차적으로 안내해 드립니다.',
  sectionTitle: 'Need Help?',
  sectionSubtitle: 'Choose the most convenient way to contact us.',
  cards: [
    {
      id: 'kakao-talk',
      icon: 'kakao',
      title: '카카오톡 상담',
      description: ['빠른 상담을 원하시면', '카카오톡으로 문의해 주세요.'],
      actionLabel: '카카오톡 상담하기',
      href: kakaoTalkUrl,
      external: true,
    },
    {
      id: 'phone-call',
      icon: 'phone',
      title: '전화 상담',
      description: ['전문 상담사가', '친절하게 안내해 드립니다.'],
      actionLabel: '전화 상담하기',
    },
    {
      id: 'location',
      icon: 'location',
      title: '찾아오기',
      description: ['주소와 지도를 확인하고', '편하게 방문하세요.'],
      actionLabel: '지도 보기',
      href: mapUrl,
      external: true,
      address: businessAddress,
    },
  ],
} satisfies ContactConfig
