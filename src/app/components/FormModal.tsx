"use client"

import Image from "next/image";
import { JSX, useState } from "react";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});

const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => <h1>Loading...</h1>,
});

const LessonForm = dynamic(() => import("./forms/LessonForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => <h1>Loading...</h1>,
});

const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => <h1>Loading...</h1>,
});

// const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"), {
//   loading: () => <h1>Loading...</h1>,
// });

const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => <h1>Loading...</h1>,
});

const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
    loading: () => <h1>Loading...</h1>,
});


const forms: {
  [ key: string ]: ( type: "create" | "update", data?: any ) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm reqType={type} data={data} />,
  student: (type, data) => <StudentForm reqType={type} data={data} />,
  parent: (type, data) => <ParentForm reqType={type} data={data} />,
  subject: (type, data) => <SubjectForm reqType={type} data={data} />,
  class: (type, data) => <ClassForm reqType={type} data={data} />,
  lesson: (type, data) => <LessonForm reqType={type} data={data} />,
  exam: (type, data) => <ExamForm reqType={type} data={data} />,
  assignment: (type, data) => <AssignmentForm reqType={type} data={data} />,
  result: (type, data) => <ResultForm reqType={type} data={data} />,
  // attendance: (type, data) => <AttendanceForm reqType={type} data={data} />,
  event: (type, data) => <EventForm reqType={type} data={data} />,
  announcement: (type, data) => <AnnouncementForm reqType={type} data={data} />,

}

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
    ) : reqType === "create" || reqType ==="update" ? (
      forms[table](reqType, data)
    ) : (
      "Form not found!"
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