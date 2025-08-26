export default function Services() {
  const services = [
    { title: "Term Loans", desc: "Traditional fixed-term business loans with competitive rates and flexible repayments for various business needs." },
    { title: "Lines of Credit", desc: "Revolving credit lines that provide flexible access to capital when you need it most for operational expenses." },
    { title: "Merchant Cash Advance", desc: "Quick access to working capital based on your future credit card sales with flexible repayment structure." },
    { title: "SBA Loans", desc: "Government-backed loans offering favorable terms and lower down payments for qualified businesses." },
    { title: "Debt Consolidation", desc: "Consolidate multiple business debts into one manageable payment with better terms and lower interest rates." },
    { title: "Equipment Loans", desc: "Specialized financing for purchasing or leasing business equipment, machinery, and vehicles." },
    { title "Invoice Factoring", desc: "Convert outstanding invoices into immediate cash flow by selling them at a discount to improve liquidity." },
    { title: "P.O Financing", desc: "Purchase Order financing helps businesses fulfill large orders by providing working capital to cover supplier costs upfront." },
    { title: "CRE Lending", desc: "Commercial real estate financing for property acquisition, refinancing, and development projects nationwide." },
    { title: "Credit Card Processing", desc: "Accept payments anywhere with competitive rates, fast deposits, and transparent pricing for all business types." },
    { title: "Credit Repair", desc: "Professional business credit building and repair services to improve your company's financial standing." },
    { title "SEO & Website Development", desc: "Professional SEO services and web development to enhance your online presence and drive business growth." },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
