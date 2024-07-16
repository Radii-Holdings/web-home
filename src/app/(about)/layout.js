import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Discussions", "Market Watch", "Testimonials",
  "Open market Reseach", "Radii Central", "patented-Innovations"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
