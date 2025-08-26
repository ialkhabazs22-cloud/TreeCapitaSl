export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">FundTek Capital Group</h1>
      <p className="mt-4 text-lg text-gray-600">
        Fast, reliable funding for your business.
      </p>
      <a
        href="/apply"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Apply Now
      </a>
    </main>
  );
}
