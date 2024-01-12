import Image from "next/image";

export default function RightDefault() {
  return (
    <>
      <h1 className="scroll-m-20 mt-10 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Next Mastodon
      </h1>
      <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
        Free and open-source Mastodon client for desktop use.
      </p>

      <Image
        className="m-auto mt-3"
        src="/logo.svg"
        alt="Next mastodon image"
        width={512}
        height={512}
      />
    </>
  );
}
