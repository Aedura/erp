const Announcements = () => {
  return (
    <div className="bg-background p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className="text-sm text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-primary/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">01-01-2025</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quibusdam excepturi temporibus corrupti sapiente minus laboriosam hic dignissimos fugiat optio earum minima ducimus qui, saepe nihil. Tenetur veritatis rem ab?</p>
        </div>

        <div className="bg-secondary/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">01-01-2025</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quibusdam excepturi temporibus corrupti sapiente minus laboriosam hic dignissimos fugiat optio earum minima ducimus qui, saepe nihil. Tenetur veritatis rem ab?</p>
        </div>

        <div className="bg-[#FF715B]/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">01-01-2025</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quibusdam excepturi temporibus corrupti sapiente minus laboriosam hic dignissimos fugiat optio earum minima ducimus qui, saepe nihil. Tenetur veritatis rem ab?</p>
        </div>
      </div>
    </div>
  )
}
export default Announcements