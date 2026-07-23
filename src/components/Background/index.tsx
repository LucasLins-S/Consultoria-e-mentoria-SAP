export default function Background() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 
        bg-[linear-gradient(rgba(10,110,209,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,110,209,0.04)_1px,transparent_1px)]
        dark:bg-[linear-gradient(rgba(61,155,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(61,155,255,0.05)_1px,transparent_1px)]
        bg-size-[40px_40px]"
    />
  );
}
