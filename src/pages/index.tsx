import * as React from "react";

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://avatars.githubusercontent.com/u/4787616"
          alt="Who"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5 mb-4">
            <p className="text-lg text-black font-semibold">Arif Rudianto</p>
            <p className="text-slate-500 font-medium">Frontend Engineer</p>
          </div>
          <a
            href="https://t.me/arifrdianto"
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Message
          </a>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
