import { NAVBAR_PATHS } from '@/lib/constants';
import Link from "next/link";

export default function Navbar() {
  return (
    <section>
      <div className={`w-screen bg-primary-black shadow-xl py-8 relative z-50`}>
        <div className="sm:px-16 px-6 flex mx-auto justify-between items-center h-full">
          <Link href="/"> <img width={92} src="/logo.svg" alt=""
          /></Link>
          <div className="flex gap-7 uppercase max-[930px]:hidden">
            {NAVBAR_PATHS.map(({ route, name }, index) => (
              <Link
                key={index}
                href={route}
                className="text-white text-[14px] text-normal hover:shadow-light-300">
                {name}
              </Link>))}
          </div>
        </div>
      </div>
    </section>
  )
}
