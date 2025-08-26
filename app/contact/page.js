"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent — backend coming soon!");
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">Send</button>
      </form>
    </section>
  );
}
