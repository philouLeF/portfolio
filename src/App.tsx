import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
