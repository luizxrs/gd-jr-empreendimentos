interface ISectionTitle {
  text: string;
}

export default function SectionTitle({ text }: ISectionTitle) {
  const words = text.split(" ");

  return (
    <>
      <div className="uppercase flex flex-col gap-2 h-96 my-12 w-full px-12 justify-center relative">
        <h1 className="text-3xl md:text-5xl font-bold pointer-events-none z-20">
          {words[0]}
          <br />
          <span className="text-Primary-100">{words[1]}</span>
        </h1>
        <h1 className="text-6xl md:text-9xl font-bold pointer-events-none absolute font-outline-1 text-transparent">
          {words[0]} <br />
          {words[1]}
        </h1>
      </div>
    </>
  );
}
