export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-8 lg:px-0">
      <div className="mb-6 flex items-center justify-between">
        <span className="h-11 w-52 animate-pulse rounded-sm bg-[#1d1d20]"></span>
        <span className="h-11 w-20 animate-pulse rounded-sm bg-[#1d1d20]"></span>
      </div>
      <div className="mb-8 h-96 w-full animate-pulse rounded-sm bg-[#1d1d20]"></div>
      <div className="flex flex-col gap-y-2">
        <span className="h-5 w-full animate-pulse rounded-sm bg-[#1d1d20]"></span>
        <span className="h-5 w-full animate-pulse rounded-sm bg-[#1d1d20]"></span>
      </div>
    </div>
  );
}
