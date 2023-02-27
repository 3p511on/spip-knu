'use client'

import Output from 'editorjs-react-renderer';
import { useState } from "react";
import NewsStripe from "./news-stripe";

export default function NewsDetailed({ post: { title, createdAt, content } }) {
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('ru')

  const [createDate, setCreateDate] = useState(formatDate(createdAt))

  return (
    <section>
      <NewsStripe />
      <div className="m-5 bg-white text-black pt-3">
        <div className="bg-accent pl-10 py-[50px] flex flex-row w-full justify-center">
          <h1 className="uppercase text-[4em] tracking-[7px] font-bold flex-1">{title}</h1>
          <span className="rotate-90 pt-5 px-1 pb-1 bg-black text-white font-bold text-[1.25rem] absolute float-right origin-bottom right-2">{createDate}</span>
        </div>

        <article className="text-[30px] text-[#010101] px-10 py-6 leading-[1.2]">
          <Output data={JSON.parse(content)} />
        </article>
      </div>
    </section>)
}
