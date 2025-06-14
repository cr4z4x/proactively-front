import "./App.css";
import Header from "./components/Header";
import Column from "./components/column"; // Capitalized to follow React component naming convention
import PillarsSection from "./components/PillarSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Column />
        <div className="diagonal-gradient-swoosh"></div>
        <PillarsSection />
      </main>
    </>
  );
}
