import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"

const ParentPage = () => {
  return (
    <div className=" flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="bg-background h-full p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold">Schedule (Pehla Bachha)</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  )
}
export default ParentPage