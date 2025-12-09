"use client"

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({ table, reqType, data, id }:
  {
    table:  "announcement"
          | "assignment"
          | "class"
          | "attendance"
          | "event"
          | "exam"
          | "lesson"
          | "parent"
          | "result"
          | "student"
          | "subject"
          | "teacher";
    reqType: "create" | "update" | "delete";
    data?: any;
    id?: number;
  }
) => {

  const size = reqType === "create" ? "size-8" : "size-7";
  const bgColor = reqType === "create" ? "bg-primary/40" : reqType === "update" ? "bg-secondary/60" : "bg-primary/30";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return reqType === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium text-wrap">Are you sure you want to delete this {table}? All data will be <span className="text-red-600 font-semibold">lost</span>.</span>
        <button className="text-sm font-semibold py-1 px-3 w-max self-center cursor-pointer rounded-sm bg-gray-300 text-red-600 border border-gray-400/30 hover:bg-red-600 hover:text-white transition">Delete</button>
      </form>
    ) : (
      <TeacherForm reqType="update" data={data} />
    )
  }

  return <>
    <button
      className={`flex items-center justify-center ${size} ${bgColor} rounded-full`}
      onClick={() => setOpen(true)}
    >
      <Image src={`/${reqType}.svg`} alt={`${reqType}-logo`} width={16} height={16} />
    </button>
    {open &&
      <div className="absolute w-screen h-screen left-0 top-0 bg-foreground/30 backdrop-blur-xs z-50 flex items-center justify-center ">
        <div className="bg-backgroundSecondary p-4 rounded-lg w-[90%] md:w-[70%] lg:w-[60%] xl:[50%] 2xl:w-[40%] relative">
          <Form />
          <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(false)}>
            <Image src="/close.svg" alt="close-icon" width={16} height={16} />
          </button>
        </div>
      </div>
    }
  </>
  }
export default FormModal