'use client'

import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function NewsCard({ title, teaser, id, createdAt, alias, index }) {
  const renderTitle = (title) => {
    const words = title.split(" ");
    const lastWord = words[words.length - 1];
    const phraseStart = words.slice(0, words.length - 1).join(' ')
    return { __html: `${phraseStart} <span class="text-accent">${lastWord}</span>` }
  }

  const padStartId = (i) => {
    return (+i + 1).toString().padStart(2, "0");
  }

  return (
    <div className="bg-white text-black w-full md:w-[350px] h-full flex relative flex-row">
      <div className="beforeCardId" data-id={padStartId(index)} />
      <div className="container px-[13px] py-[20px] flex-col m-1 flex">
        <h4 className="text-[36px] uppercase mb-[15px] font-bold leading-[1]" dangerouslySetInnerHTML={renderTitle(title)} />
        <div className="text-[16px] mb-[60px] flex-1 leading-[1]">
          <ReactMarkdown>{teaser}</ReactMarkdown>
        </div>
        <span className="text-[12px] mb-[15px]">{createdAt}</span>
        <div className="bg-black text-white flex items-end flex-col uppercase w-[calc(100%+35px)] md:w-[350px] relative left-[-17px] p-[3px]">
          <Link href={`/news/${alias}`} className="text-white text-[17px] font-bold mb-[5px] float-right text-right">Детальніше</Link>
        </div>
      </div>
    </div>
  )
}
