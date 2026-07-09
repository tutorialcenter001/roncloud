import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_35%),linear-gradient(135deg,_#fff7ed_0%,_#ffffff_40%,_#fef3c7_100%)] text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />

      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-24 sm:px-8"
      >
        <div className="max-w-5xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur dark:border-orange-400/20 dark:bg-gray-900/60 dark:text-orange-300">
            Crafting modern digital experiences
          </span>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Roncloud Technologies
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            We build bold, high-performing websites and digital products that help brands stand out with confidence.
          </p>
        </div>
      </section>
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
