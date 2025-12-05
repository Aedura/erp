import Image from "next/image";

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-lg odd:bg-primary even:bg-secondary p-4 flex-1 min-w-[130px] shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-background px-2 py-0.5 rounded-full">2024/25</span>
        <Image src="more.svg" alt="more-logo" width={20} height={20} className="opacity-70" />
      </div>
      <h1 className="text-2xl font-extrabold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-black/30">{type}s</h2>
    </div>
  )
}
export default UserCard