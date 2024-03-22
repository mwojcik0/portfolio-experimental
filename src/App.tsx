import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Loader} from "./components/loader.tsx";
import {Header} from "./components/header.tsx";
import {Menu} from "./components/menu.tsx";
import './App.sass';
import Spline from '@splinetool/react-spline';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Loader loading={loading} />
      <Spline onLoad={() => setLoading(false)} className="spline" scene="https://prod.spline.design/VlAd4WmOD1IJbEpJ/scene.splinecode" />
      <div>
        <section>
          <Menu/>
          <Header/>
        </section>
      </div>
    </BrowserRouter>
  )
}