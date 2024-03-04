import { useState } from "preact/hooks";

export function HeaderMenu() {
  const [isHidden, setHidden] = useState("hidden");

  const handleHidden = () => {
    setHidden((prevHidden) => (prevHidden === "hidden" ? "" : "hidden"));
  };

  return (
    <>
      <button
        type='button'
        onClick={() => handleHidden()}
        class='text-white p-2 rounded-lg m-1 text-xl md:hidden md:text-blue-500'>
        Menu
      </button>
      <nav
        class={`${isHidden} animate-flip-in-y p-3 w-[30%] fixed top-14  bg-gradient-to-r from-[#6d6d6d] to-[#5d5d5d] rounded-2xl  text-white  `}>
        <ol class='grid gap-2 '>
          <li class='hover:bg-gradient-to-r from-[#5d5d5d] to-[#4f4f4f] text-center rounded-lg p-2 active:bg-gradient-to-r active:from-[#454545] active:to-[#3d3d3d]'>
            <a
              class='font-bold block text-white text-3xl w-full  hover:text-white'
              href='/'>
              Home
            </a>
          </li>
          <li class='hover:bg-gradient-to-r from-[#5d5d5d] to-[#4f4f4f] text-center rounded-lg p-2 active:bg-gradient-to-r active:from-[#454545] active:to-[#3d3d3d]'>
            <a
              class='font-bold block text-white text-3xl w-full  hover:text-white'
              href='/about'>
              About
            </a>
          </li>
          <li class='hover:bg-gradient-to-r from-[#5d5d5d] to-[#4f4f4f] text-center rounded-lg p-2 active:bg-gradient-to-r active:from-[#454545] active:to-[#3d3d3d]'>
            <a
              class='font-bold block text-white text-3xl w-full  hover:text-white'
              href='/proyect'>
              Proyects
            </a>
          </li>
        </ol>
      </nav>
      {/* tablet */}
      <nav class=' max-md:hidden  w-full text-2xl'>
        <ul class='flex justify-center gap-10 px-10 py-2'>
          <li class=' hover:cursor-pointer  hover:bg-slate-700 active:bg-slate-800 p-2 rounded-lg'>
            <a class='text-white w-full hover:text-white' href='/'>
              Home
            </a>
          </li>
          <li class=' hover:cursor-pointer hover:bg-slate-700 active:bg-slate-800 p-2 rounded-lg'>
            <a class='text-white w-full hover:text-white' href='/about'>
              About
            </a>
          </li>
          <li class=' hover:cursor-pointer hover:bg-slate-700 active:bg-slate-800 p-2 rounded-lg'>
            <a class='text-white w-full hover:text-white' href='/proyect'>
              Proyects
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
