import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCHBAR */}
      <div className="hidden md:flex gap-2 items-center text-xs rounded-full ring-[1.5px] ring-gray-400 px-2">
        <Image src="search.svg" alt="search-icon" width={16} height={16} className="opacity-70" />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 outline-none" />
      </div>
      {/* ICONS & USERS */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="message.svg" alt="message-box-logo" width={20} height={20} className="opacity-70" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="announcement.svg" alt="announcement-box-logo" width={20} height={20} className="opacity-70 -rotate-20" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 flex items-center justify-center bg-primary text-white rounded-full text-xs"></div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="profile.svg" alt="profile-logo" width={36} height={36} className="rounded-full opacity-70" />
      </div>
    </div>
  )
}
export default Navbar