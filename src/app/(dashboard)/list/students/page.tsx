import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";
import FormModal from "@/app/components/FormModal";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
}

const coloumns = [
  {
    header: "Info", accessor: "info"
  },
  {
    header: "Student ID", accessor: "studentId", className: "hidden md:table-cell"
  },
  {
    header: "Grade", accessor: "grade", className: "hidden md:table-cell"
  },
  {
    header: "Phone", accessor: "phone", className: "hidden lg:table-cell"
  },
  {
    header: "Address", accessor: "address", className: "hidden lg:table-cell"
  },
  {
    header: "Actions", accessor: "action"
  },
]

const StudentsListPage = () => {

  const renderRow = (item: Student) => (
    <tr key={item.id} className="bg-background even:bg-backgroundSecondary/50 text-sm hover:bg-primary/10">
      <td className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt={`${item.name}'s picture`} width={40} height={40} className="md:hidden xl:block rounded-full size-10 object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="size-7 rounded-full bg-secondary/60 flex items-center justify-center">
              <Image src="/update.svg" alt="view-logo" width={16} height={16} className="opacity-70" />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <FormModal table="student" reqType="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4 bg-background m-4 mt-0 rounded-lg flex-1">
      {/* top */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="hidden md:block text-xl font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="size-8 flex items-center justify-center rounded-full bg-primary/40">
              <Image src="/filter.svg" alt="filter-logo" width={16} height={16} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-full bg-primary/40">
              <Image src="/sort.svg" alt="filter-logo" width={16} height={16} />
            </button>
            {role === "admin" && (
              <FormModal table="student" reqType="create" />
            )}
          </div>
        </div>
      </div>
      <Table coloumns={coloumns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  )
}
export default StudentsListPage