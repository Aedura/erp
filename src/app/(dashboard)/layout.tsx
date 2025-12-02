export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex ">
        {/* LEFT - sidebar*/}
        <div className="w-1/6 bg-red-200">l</div>
        {/* RIGHT */}
        <div className="w-5/6 bg-blue-200">r</div>

      </div>
  );
}
