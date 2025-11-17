import Image from "next/image";

interface Props {
  name: string;
  role: string;
  quote: string;
  photo: string;
}

export default function TestimonialCard({ name, role, quote, photo }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card">
      <div className="flex items-center mb-4">
        <Image
          src={photo}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600 dark:text-slate-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-slate-200 italic">“{quote}”</p>
    </div>
  );
}
