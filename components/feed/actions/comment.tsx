interface LikeActionProps {
  count: number;
}

export default function Comment({ count }: LikeActionProps) {
  return (
    <>
      <div className="flex items-center">
        <svg
          className=" h-6 w-6 text-black"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
        <span className="ml-1 text-black">{count}</span>
      </div>
    </>
  );
}
