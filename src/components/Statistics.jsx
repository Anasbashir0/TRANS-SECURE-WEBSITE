function Statistics() {
  const stats = [
    {
      number: "20+",
      label: "Years of Experience",
    },
    {
      number: "500+",
      label: "Projects Completed",
    },
    {
      number: "150+",
      label: "Professional Staff",
    },
    {
      number: "100%",
      label: "Client Commitment",
    },
  ];

  return (
    <section className="bg-[#0F2E82] py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-5xl font-bold text-white">
              {stat.number}
            </h2>

            <p className="text-gray-300 mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;