import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Research Workflows", "Market Structure", "Broker Connectivity",
  "Execution Controls", "Radii Console", "Operator Reviews"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
