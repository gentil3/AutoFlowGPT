export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 py-20">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-display font-bold">
            Book Your Free Automation Call
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            Tell us a bit about your business. We’ll come to the call with
            1–3 ready-to-build workflows.
          </p>
        </div>

        <form className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-3 py-2 bg-white dark:bg-slate-950"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-3 py-2 bg-white dark:bg-slate-950"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              What tools do you use today?
            </label>
            <input
              placeholder="e.g. Slack, Notion, HubSpot, Stripe, Calendly…"
              className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-3 py-2 bg-white dark:bg-slate-950"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Your #1 bottleneck
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-3 py-2 bg-white dark:bg-slate-950"
              placeholder="What are you wasting time on right now?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Submit &amp; Get Scheduling Link
          </button>
          <p className="text-xs text-gray-500 text-center">
            This form is a static demo. Hook it to Zapier / Make / HubSpot to
            go live.
          </p>
        </form>
      </div>
    </div>
  );
}
