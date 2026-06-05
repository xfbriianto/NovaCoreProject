export function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none z-0"></div>
    </>
  );
}
