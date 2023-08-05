export interface vidProps {
  id: {
    videoId: string;
    channelId: string;
  }
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    channelId: string;
    thumbnails: {
      medium: {
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
}