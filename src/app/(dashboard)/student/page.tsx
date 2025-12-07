import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"
import EvenetCalendar from "@/app/components/EvenetCalendar"

const StudentPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="bg-background h-full p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold">Schedule (10-B)</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EvenetCalendar />
        <Announcements />
      </div>
    </div>
  )
}
export default StudentPage