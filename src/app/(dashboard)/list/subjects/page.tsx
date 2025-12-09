import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, subjectsData } from "@/lib/data";
import FormModal from "@/app/components/FormModal";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
}

const coloumns = [
  {
    header: "Subject Name", accessor: "subjectName"
  },
  {
    header: "Teachers", accessor: "teachers", className: "hidden md:table-cell"
  },
  {
    header: "Actions", accessor: "action"
  },
]

const SubjectsListPage = () => {

  const renderRow = (item: Subject) => (
    <tr key={item.id} className="bg-background even:bg-backgroundSecondary/50 text-sm hover:bg-primary/10">
      <td className="flex items-center gap-4 p-4">
        <h3 className="font-semibold">{item.name}</h3>
      </td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" reqType="update" data={item} />
              <FormModal table="subject" reqType="delete" id={item.id} />
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
        <h1 className="hidden md:block text-xl font-semibold">All Subjects</h1>
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
              <FormModal table="subject" reqType="create" />
            )}
          </div>
        </div>
      </div>
      <Table coloumns={coloumns} renderRow={renderRow} data={subjectsData} />
      <Pagination />
    </div>
  )
}
export default SubjectsListPage