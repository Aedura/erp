import { ReactNode } from "react";

const Table = ( { coloumns, renderRow, data }:
  {
    coloumns: { header: string; accessor: string; className?: string }[],
    renderRow: (item: any) => ReactNode,
    data: any[]
  } ) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {coloumns.map((col) => (
            <th key={col.accessor} className={col.className}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((i) => renderRow(i))}
      </tbody>
    </table>
  )
}
export default Table