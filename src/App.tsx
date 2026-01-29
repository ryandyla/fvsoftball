import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

const Placeholder = ({ title }: { title: string }) => (
  <div className="py-16">
    <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
    <p className="mt-2 text-slate-600">Coming soon.</p>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Placeholder title="Registration" />} />
        <Route path="/schedule" element={<Placeholder title="Schedule" />} />
        <Route path="/news" element={<Placeholder title="News" />} />
        <Route path="/sponsors" element={<Placeholder title="Sponsors" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="*" element={<Placeholder title="Not Found" />} />
      </Routes>
    </Layout>
  );
}

