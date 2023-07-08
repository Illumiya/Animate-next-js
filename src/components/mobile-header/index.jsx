import NavContext from "@/context/nav-context";
import navigation from "@/navigation";
import Link from "next/link";
import { useContext } from "react";
import { HiX } from "react-icons/hi";


export default function MobileHeader() {
  const { toggleNav,isNavOpen } = useContext(NavContext);


  return (
    <div className="flex flex-col w-screen h-screen p-6 overflow-hidden bg-white">
      <div className="flex justify-end w-full">
        <button onClick={toggleNav}>
          <HiX size={48} />
        </button>
      </div>
      <div className="w-full h-full flex items-start pt-20 justify-center text-[24px]">
        <ul className="flex flex-col list-none text-neutral-900 gap-10 space-y-[22px]">
          {navigation?.map((link) => (
            <li
              key={link.id}
              className="whitespace-nowrap hover:text-primary focus-within:text-primary text-4xl font-bold"
            >
              <Link onClick={toggleNav} href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
