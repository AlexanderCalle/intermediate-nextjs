import { Skeleton } from "@nextui-org/skeleton"

const EventsLoader = () => {
  return (
    <div className="w-full h-full p-4 flex justify-center">
    <div className="w-full">
      <h2 className="text-center text-xl">{`All Events`}</h2>
      <div className="rounded-md border border-default-100 my-8">
          <div className="border-b border-default-100 p-2 flex gap-2 items-center">
            <Skeleton className='h-3 w-1/6'></Skeleton>
            <Skeleton className='h-6 w-10 rounded-full'></Skeleton>
            <Skeleton className='h-6 w-10 rounded-full'></Skeleton>
          </div>
          <div className="border-b border-default-100 p-2 flex gap-2">
            <Skeleton className='h-3 w-1/6'></Skeleton>
            <Skeleton className='h-6 w-10 rounded-full'></Skeleton>
            <Skeleton className='h-6 w-10 rounded-full'></Skeleton>
          </div>
          <div className="border-b border-default-100 p-2 flex gap-2">
            <Skeleton className='h-3 w-1/6'></Skeleton>
            <Skeleton className='h-6 w-10 rounded-full'></Skeleton>
            <Skeleton className='h-6 w-10 rounded-full'></Skeleton>
          </div>
      </div>
    </div>
  </div>
  )
}

export default EventsLoader