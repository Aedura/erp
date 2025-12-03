import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "home.svg",
        label: "Home",
        href: "/"
      },
      {
        icon: "teacher.svg",
        label: "Teachers",
        href: "/"
      },
      {
        icon: "student.svg",
        label: "Students",
        href: "/"
      },
      {
        icon: "parent.svg",
        label: "Parents",
        href: "/"
      },
      {
        icon: "subject.svg",
        label: "Subjects",
        href: "/"
      },
      {
        icon: "class.svg",
        label: "Classes",
        href: "/"
      },
      {
        icon: "lesson.svg",
        label: "Lessons",
        href: "/"
      },
      {
        icon: "exam.svg",
        label: "Exams",
        href: "/"
      },
      {
        icon: "assignment.svg",
        label: "Assignments",
        href: "/"
      },
      {
        icon: "result.svg",
        label: "Results",
        href: "/"
      },
      {
        icon: "attendance.svg",
        label: "Attendance",
        href: "/"
      },
      {
        icon: "calendar.svg",
        label: "Events",
        href: "/"
      },
      {
        icon: "message.svg",
        label: "Messages",
        href: "/"
      },
      {
        icon: "announcement.svg",
        label: "Announcements",
        href: "/"
      },
    ]
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "profile.svg",
        label: "Profile",
        href: "/"
      },
      {
        icon: "settings.svg",
        label: "Settings",
        href: "/"
      },
      {
        icon: "logout.svg",
        label: "Logout",
        href: "/"
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {
        menuItems.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-2">{i.title}</span>
            {i.items.map((item) => (
              <Link href={item.href} key={item.label} className="flex gap-4 items-center justify-center lg:justify-start text-gray-500 py-2">
                <Image src={item.icon} alt={`${item.label}-logo`} width={20} height={20} className="opacity-70" />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        ))
      }
    </div>
  )
}
export default Menu