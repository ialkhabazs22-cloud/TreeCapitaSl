"use client";

export default function Apply() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted — backend coming soon!");
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Apply for Funding</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Business Name" className="w-full p-3 border rounded" required />
        <input type="text" placeholder="First Name" className="w-full p-3 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" required />
        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">Submit</button>
      </form>
    </section>
  );
}
