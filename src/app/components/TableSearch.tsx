import Image from "next/image"

const TableSearch = () => {
  return (
  <div className="w-full md:w-md-auto flex gap-2 items-center text-xs rounded-full ring-[1.5px] ring-gray-400 px-2">
      <Image src="/search.svg" alt="search-icon" width={16} height={16} className="opacity-70" />
      <input type="text" placeholder="Search..." className="w-[200px] p-2 outline-none" />
    </div>
  )
}
export default TableSearch