import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, examsData } from "@/lib/data";

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
}

const coloumns = [
  {
    header: "Subject Name", accessor: "subject"
  },
  {
    header: "Class", accessor: "class"
  },
  {
    header: "Teacher", accessor: "teacher", className: "hidden md:table-cell"
  },
  {
    header: "Date", accessor: "date", className: "hidden md:table-cell"
  },
  {
    header: "Actions", accessor: "action"
  },
]

const ExamsListPage = () => {

  const renderRow = (item: Exam) => (
    <tr key={item.id} className="bg-background even:bg-backgroundSecondary/50 text-sm hover:bg-primary/10">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="size-7 rounded-full bg-secondary/60 flex items-center justify-center">
              <Image src="/view.svg" alt="view-logo" width={16} height={16} className="opacity-70" />
            </button>
          </Link>
          {role === "admin" && (
            <button className="size-7 rounded-full bg-primary/30 flex items-center justify-center">
              <Image src="/delete.svg" alt="view-logo" width={16} height={16} className="opacity-70" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4 bg-background m-4 mt-0 rounded-lg flex-1">
      {/* top */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="hidden md:block text-xl font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="size-8 flex items-center justify-center rounded-full bg-primary/40">
              <Image src="/filter.svg" alt="filter-logo" width={16} height={16} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-full bg-primary/40">
              <Image src="/sort.svg" alt="filter-logo" width={16} height={16} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-full bg-primary/40">
              <Image src="/plus.svg" alt="filter-logo" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
      <Table coloumns={coloumns} renderRow={renderRow} data={examsData} />
      <Pagination />
    </div>
  )
}
export default ExamsListPage