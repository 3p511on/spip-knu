import NewsCard from "./news-card"
import NewsStripe from "./news-stripe"

export default function News({ posts }) {
  return (
    <section>
      <NewsStripe />

      {/* Description */}
      <div className="container mx-auto sm:px-16 pt-10 lg:w-[80%] w-[100%] p-6">
        <h4 class="hidden md:block relative uppercase text-[17px] font-bold leading-[1] rotate-90 float-right mt-14 left-[9%]">Новини<br />від 2023 р.</h4>
        <h2 className="uppercase text-[#f2f2f2] mb-30 flex flex-col"><span className="font-bold text-[3rem] md:text-[95px] mb-4">Будь у курсі</span><span class="md:text-[35px] text-[1.3rem] lowercase md:tracking-[4px]">ключових подій цього тижня</span>
        </h2>

        {/* Cards */}
        <div className="my-[40px] md:grid md:grid-flow-col gap-5 flex flex-col">
          {posts.map(({ attributes: { title, teaser, alias, createdAt } }, index) => (
            <NewsCard
              key={index}
              index={index}
              title={title}
              alias={alias}
              creationDate={createdAt}
              teaser={teaser} />
          ))}
        </div>


      </div>

    </section>
  )
}
