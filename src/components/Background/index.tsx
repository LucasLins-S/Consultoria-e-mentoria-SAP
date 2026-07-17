export default function Background() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
            linear-gradient(rgba(10,110,209,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,110,209,0.04) 1px, transparent 1px)
          `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}
