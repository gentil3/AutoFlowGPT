export const metadata = {
  title: "AutoFlowGPT",
  description: "AI-powered workflow automation tool.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
