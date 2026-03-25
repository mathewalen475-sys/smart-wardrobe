import React from "react";

const Profile = () => {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen flex flex-col">

      {/* Header */}
      <header className="pt-12 pb-8 px-6 flex flex-col items-center border-b border-primary/10 bg-white">

        <div className="relative">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-orange-300 shadow-xl overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover rounded-full bg-slate-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv83uQYwPTC94IAyLUWtfXO9VEXGk9r84xkHbbEZGVJryQSNJGj_wseYeOyBND7Ta4jCVfkFGhw3IuD54cqzDduDNVpJ7xdC1ZyejZh9h2ZEOMUwM1ZZbimKVkgpGQ2SpU6X9LUboTrdLV1Ss0mLkpRITnUQ_bFIxgMXU2fvwQC14CDL24ZgKVyX7e49k0vENjRvFe4idfNzU21MSsjzyEls99vMGnWQdCh-S8DI7BVRDIIrpVwBiQkOzXhNmj073L66-KboGxIM6y"
            />
          </div>

          <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>

        <h1 className="mt-6 text-3xl italic tracking-tight">
          Julianna Smith
        </h1>

        <p className="text-primary font-semibold tracking-widest uppercase text-xs mt-2">
          Premium Member
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-8 space-y-8">

        {/* Measurements */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Personal Measurements
          </h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">

            <div className="flex justify-between p-4 border-b">
              <span>Country</span>
              <span className="text-slate-500">France</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>Age</span>
              <span className="text-slate-500">28 years</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>Height</span>
              <span className="text-slate-500">174 cm</span>
            </div>

            <div className="flex justify-between p-4 border-b">
              <span>Weight</span>
              <span className="text-slate-500">62 kg</span>
            </div>

            <div className="flex justify-between p-4">
              <span>Hair Color</span>
              <span className="text-slate-500">Chestnut Brown</span>
            </div>

          </div>
        </section>

        {/* Account Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Account & App
          </h2>

          <button className="w-full flex justify-between p-4 bg-white rounded-xl border hover:border-primary/40">
            <span>About Smart Wardrobe</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <button className="w-full flex justify-between p-4 bg-white rounded-xl border hover:border-primary/40">
            <span>Account Settings</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <button className="w-full mt-4 flex items-center justify-center gap-2 p-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </section>

        <div className="h-24"></div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-3 flex justify-between">

        <div className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">checkroom</span>
          <span className="text-xs">Wardrobe</span>
        </div>

        <div className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="text-xs">Assistant</span>
        </div>

        <div className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">dry_cleaning</span>
          <span className="text-xs">Outfits</span>
        </div>

        <div className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined">person</span>
          <span className="text-xs">Profile</span>
        </div>

      </nav>
    </div>
  );
};

export default Profile;
