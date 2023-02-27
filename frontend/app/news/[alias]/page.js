import NewsDetailed from '@/components/news-detailed';
import { findPostByAlias } from '@/lib/api';
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function NewsPost({ params: { alias } }) {
  if (!alias) return notFound()
  const post = await findPostByAlias(alias)
  return <NewsDetailed post={post} />
}
