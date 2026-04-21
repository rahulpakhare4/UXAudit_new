function Home() {

  // ✅ FIXED data (Tailwind-safe classes)
  const reports = [
    { name: "example.com", score: 45, color: "text-red-600", bar: "bg-red-500" },
    { name: "shopsite.com", score: 78, color: "text-yellow-600", bar: "bg-yellow-500" },
    { name: "blogworld.net", score: 92, color: "text-green-600", bar: "bg-green-500" },
    { name: "myportfolio.co", score: 88, color: "text-purple-600", bar: "bg-purple-500" },
    { name: "startuphub.io", score: 62, color: "text-pink-600", bar: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 animate-gradient">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-10 md:px-20 py-5 bg-blue-900 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">UXAudit</h1>
        <div className="space-x-10 hidden md:flex text-xl font-medium">
          <a href="#" className="hover:text-gray-300">Demo</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">Docs</a>
          <a href="#" className="hover:text-gray-300">Login</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="w-full text-center pt-8 pb-10 px-6 md:px-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
  Analyze Your Website UX Instantly
</h2>

<p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6 leading-snug">
  Get actionable insights on usability, accessibility, and design improvements.
</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="https://yourwebsite.com"
            className="w-full flex-1 px-5 py-4 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button className="bg-blue-600 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Scan Website
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="w-full px-6 md:px-16 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          
          {[
            { title: "⚡ Fast Analysis", desc: "Scan your site in seconds with smart algorithms." },
            { title: "♿ Accessibility", desc: "Ensure WCAG compliance for all users." },
            { title: "📊 Detailed Reports", desc: "Get clear UX insights and improvement tips." }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md p-5 rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Reports */}
      <div className="w-full px-6 md:px-16 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">
            Recent Reports
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {reports.map((site, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 hover:border-blue-300 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="font-semibold text-lg">{site.name}</h4>
                <p className="text-sm text-gray-500">Scanned recently</p>

                <p className="mt-2 text-gray-700">
                  UX Score:{" "}
                  <span className={`font-bold ${site.color}`}>
                    {site.score}
                  </span>
                </p>

                {/* Progress */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div
                    className={`h-2 rounded-full ${site.bar}`}
                    style={{ width: `${site.score}%` }}
                  ></div>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Issues: {100 - site.score} •{" "}
                  <span className="font-medium">
                    {site.score > 85 ? "Good" : "Needs Work"}
                  </span>
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-600 mt-auto">
        © 2026 UXAudit. All rights reserved.
      </footer>

      {/* Background Animation */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 12s ease infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

    </div>
  );
}

export default Home;
