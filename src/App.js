import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />

      <main className="pt-24">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6 py-20"
        >
          <div className="max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
              Modern digital experiences
            </span>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              Roncloud Technologies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We build elegant websites and products that help ambitious brands move faster and stand out.
            </p>
          </div>
        </section>

        <section id="about" className="min-h-[50vh] bg-white/70 px-6 py-20 dark:bg-gray-900/70">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">About us</h2>
            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Our team blends strategy, design, and engineering to create thoughtful digital experiences.
            </p>
          </div>
        </section>

        <section id="services" className="min-h-[50vh] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              From branding to web development, we shape digital products that feel premium and perform beautifully.
            </p>
          </div>
        </section>

        <section id="portfolio" className="min-h-[50vh] bg-white/70 px-6 py-20 dark:bg-gray-900/70">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              We partner with founders and teams to turn bold ideas into memorable online experiences.
            </p>
          </div>
        </section>

        <section id="contact" className="min-h-[50vh] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Ready to launch something extraordinary? Let&apos;s start the conversation.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-dark">
//       <h1 className="text-6xl font-bold text-primary">
//         Roncloud Technologies
//       </h1>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
