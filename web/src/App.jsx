import Spline from "@splinetool/react-spline";

function App() {
  return (
    <>
      <main className="bg-black">
        <div className="w-full min-h-screen absolute top-[vh] left-0 z-0">
          <Spline scene="https://prod.spline.design/TeJyeQFTo36tFtOl/scene.splinecode" />
        </div>
        <div className="flex min-h-screen flex-col items-center justify-center p-8 relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto mb-16">
            <div className="flex flex-wrap gap-5 items-center justify-center space-x-4 mb-8 mt-20">
              <span className="text-[5.4rem] -mb-2 font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
                Elite CLI
              </span>
            </div>
            <h2 className="text-4xl text-gray-300 font-light">
              Where Modern Development Begins
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A powerful CLI tool for scaffolding modern web applications with
              Express, TypeScript, and modern development tools
            </p>
            <div className="flex gap-6 justify-center pt-4">
              <a
                target="_blank"
                href="https://github.com/AshutoshDM1/Elite-CLI"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white font-medium hover:opacity-90 transition-all duration-200 text-lg"
              >
                Get Started
              </a>
              <a
                target="_blank"
                href="https://github.com/AshutoshDM1/Elite-CLI"
                className="px-8 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-200 text-lg"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mb-16 cursor-pointer">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-800 text-transparent bg-clip-text mb-4 text-center">
                Express
              </h3>
              <p className="text-gray-400 text-center">
                Build robust backend applications with Express.js support
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-300 to-blue-900 text-transparent bg-clip-text mb-4 text-center">
                TypeScript
              </h3>
              <p className="text-gray-400 text-center">
                First-class TypeScript support for type-safe development
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-zinc-400 via-white to-zinc-600 text-transparent bg-clip-text mb-4 text-center">
                Next.js
              </h3>
              <p className="text-gray-400 text-center">
                Modern UI components with Shadcn/UI integration
              </p>
            </div>
          </div>
          <footer className="text-center text-gray-100 pb-8">
            <p>Built with passion by Elite CLI Team</p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
