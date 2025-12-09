import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, teachersData } from "@/lib/data";
import FormModal from "@/app/components/FormModal";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

const coloumns = [
  {
    header: "Info", accessor: "info"
  },
  {
    header: "Teacher ID", accessor: "teacherId", className: "hidden md:table-cell"
  },
  {
    header: "Subjects", accessor: "subjects", className: "hidden md:table-cell"
  },
  {
    header: "Classes", accessor: "classes", className: "hidden md:table-cell"
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

const TeachersListPage = () => {

  const renderRow = (item: Teacher) => (
    <tr key={item.id} className="bg-background even:bg-backgroundSecondary/50 text-sm hover:bg-primary/10">
      <td className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt={`${item.name}'s picture`} width={40} height={40} className="md:hidden xl:block rounded-full size-10 object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
      <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="teacher" reqType="update" data={item} />
              <FormModal table="teacher" reqType="delete" id={item.id} />
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
        <h1 className="hidden md:block text-xl font-semibold">All Teachers</h1>
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
              <FormModal table="teacher" reqType="create" />
            )}
          </div>
        </div>
      </div>
      <Table coloumns={coloumns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  )
}
export default TeachersListPage;