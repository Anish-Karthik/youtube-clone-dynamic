// {
//   "kind": "youtube#searchResult",
//   "id": {
//     "kind": "youtube#video",
//     "videoId": "9L9lDOwuT64"
//   },
//   "snippet": {
//     "publishedAt": "2023-08-04T01:00:03Z",
//     "channelId": "UC8rc4LEymAfWQMx1diQlaXA",
//     "title": "Jhony REACT - JOTAPÊ, NEO &amp; BIG MIKE X KANT, LEVINSK E TUBARÃO - Primeira Fase ( Nível Insano🔥)",
//     "description": "Ouça agora➡️ JHONY CONVIDA #7 PRETO$ https://youtu.be/P6w7eMsUVg4 ...",
//     "thumbnails": {
//       "default": {
//         "url": "https://i.ytimg.com/vi/9L9lDOwuT64/default.jpg",
//         "width": 120,
//         "height": 90
//       },
//       "medium": {
//         "url": "https://i.ytimg.com/vi/9L9lDOwuT64/mqdefault.jpg",
//         "width": 320,
//         "height": 180
//       },
//       "high": {
//         "url": "https://i.ytimg.com/vi/9L9lDOwuT64/hqdefault.jpg",
//         "width": 480,
//         "height": 360
//       }
//     },
//     "channelTitle": "McJhony",
//     "liveBroadcastContent": "none",
//     "publishTime": "2023-08-04T01:00:03Z"
//   }
// }



export interface vidProps {
  id: {
    kind: string;
    videoId: string;
    channelId?: string;
  }
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    channelId: string;
    thumbnails: {
      default: {
        url: string;
      },
      medium: {
        url: string;
      },
      high: {
        url: string;
      }
    }
  }
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
    subscriberCount?: string;
  }
  kind: string;
  channelTitle?: string;
  liveBroadcastContent?: string;
  publishTime?: string;
}