export default function Loading() {
  return (
    <div className="relative xl:grid xl:grid-cols-[1fr_280px] xl:gap-8 mx-auto max-w-6xl px-8 lg:px-16 mt-10">
      <div className="mx-auto max-w-3xl xl:mx-0">
        <div className="mb-6 flex items-center justify-between">
          <span className="h-11 w-52 animate-pulse rounded-sm bg-[#10132E]"></span>
        </div>
        <div className="mb-8 h-96 w-full animate-pulse rounded-sm bg-[#10132E]"></div>
        <div className="flex flex-col gap-y-2">
          <span className="h-11 w-full animate-pulse rounded-sm bg-[#10132E]"></span>
          <span className="h-5 w-full animate-pulse rounded-sm bg-[#10132E]"></span>
          <span className="h-5 w-full animate-pulse rounded-sm bg-[#10132E]"></span>
        </div>
      </div>
      
      <div className="hidden xl:block xl:pl-4">
        <div className="sticky top-32">
          <div className="flex flex-col gap-y-3">
            <span className="h-4 w-32 animate-pulse rounded-sm bg-[#10132E]"></span>
            <span className="h-3 w-40 animate-pulse rounded-sm bg-[#10132E]"></span>
            <span className="h-3 w-36 animate-pulse rounded-sm bg-[#10132E] ml-4"></span>
            <span className="h-3 w-28 animate-pulse rounded-sm bg-[#10132E] ml-8"></span>
            <span className="h-3 w-44 animate-pulse rounded-sm bg-[#10132E]"></span>
            <span className="h-3 w-32 animate-pulse rounded-sm bg-[#10132E] ml-4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
