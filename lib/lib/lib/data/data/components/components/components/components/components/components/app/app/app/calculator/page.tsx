"use client";

import { useState } from "react";
import CalculatorForm from "@/components/CalculatorForm";

export default function CalculatorPage() {
  const [result, setResult] = useState<{ hours: number; value: number }>();

  const handleSubmit = async (data: any) => {
    const res = await fetch("/api/hours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    setResult(json);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-display font-bold">
            Hours-Saved Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            Tell us how you work today, and see how much time automation can
            give back every month.
          </p>
        </div>

        <CalculatorForm onSubmit={handleSubmit} loading={false} />

        {result && (
          <div className="mt-8 bg-white dark:bg-slate-900 rounded-2xl shadow p-6 text-center space-y-2">
            <p className="text-xl font-semibold">
              ~{result.hours} hours saved per month
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-300">
              Assuming $100/h of value, that’s around{" "}
              <span className="font-bold">${result.value}</span> / month.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
