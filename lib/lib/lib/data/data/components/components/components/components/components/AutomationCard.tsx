interface Props {
  title: string;
  desc: string;
  bullets: string[];
}

export default function AutomationCard({ title, desc, bullets }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card card-hover">
      <h3 className="text-xl font-semibold text-dark dark:text-slate-50">
        {title}
      </h3>
      <p className="mt-2 text-gray dark:text-slate-300">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray dark:text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>✓ {b}</li>
        ))}
      </ul>
    </div>
  );
}
