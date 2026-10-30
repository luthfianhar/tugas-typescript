
interface HangmanDrawProps {
  attempt: number;
}

const HangmanHead = () => (
  <div className="rounded-full border-[6px] border-black w-15 h-15 absolute -right-6.5 top-11" />
);

const HangmanBody = () => (
  <div className="bg-black w-2 h-32 absolute right-0 top-25" />
);

const HangmanRightArm = () => (
  <div className="bg-black h-2 w-26 absolute -right-25 top-35 -rotate-12" />
);

const HangmanLeftArm = () => (
  <div className="bg-black h-2 w-26 absolute right-1 top-35 rotate-12" />
);

const HangmanLeftFoot = () => (
  <div className="bg-black h-2 w-26 absolute -right-3 top-63 -rotate-45" />
);

const HangmanRightFoot = () => (
  <div className="bg-black h-2 w-26 absolute -right-21 top-63 rotate-45" />
);

const HangmanFullBody = [
  <HangmanHead key="head" />,
  <HangmanBody key="body" />,
  <HangmanRightArm key="right-arm" />,
  <HangmanLeftArm key="left-arm" />,
  <HangmanLeftFoot key="left-foot" />,
  <HangmanRightFoot key="right-foot" />,
];

function HangmanDraw({ attempt }: HangmanDrawProps) {
  return (
    <section className="relative">
      {HangmanFullBody.slice(0, Math.min(attempt, 6))}

      <div className="bg-black w-2 h-12 absolute right-0" />
      <div className="bg-black w-40 h-2 ml-32" />
      <div className="bg-black w-2 h-96 ml-32" />
      <div className="bg-black w-64 h-2" />
    </section>
  );
}

export default HangmanDraw;
