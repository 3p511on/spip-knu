import News from "@/components/news";
import { getNews } from '@/lib/api';

export const revalidate = 60;

export default async function Home() {
  const posts = (await getNews())?.data?.slice(0, 3)
  return (
    <News posts={posts} />
  )
}
