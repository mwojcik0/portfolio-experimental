import {useState} from "react";
import {Loader} from "./components/loader.tsx";
import {Header} from "./components/header.tsx";
import {Content} from "./components/content.tsx";
import Spline from '@splinetool/react-spline';
import './App.sass';
import {Menu} from "./components/menu.tsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loader loading={loading} />
      <Menu />
      <section>
        <Spline onLoad={() => setLoading(false)} className="spline" scene="https://prod.spline.design/VlAd4WmOD1IJbEpJ/scene.splinecode" />
        <Header />
        <Content />
      </section>
    </>
  )
}