import {useState} from "react";
import {Loader} from "./components/loader.tsx";
import {Header} from "./components/header.tsx";
import Spline from '@splinetool/react-spline';
import './App.sass';
import {Menu} from "./components/menu.tsx";
import {Home} from "./components/home.tsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loader loading={loading} />
      <Spline onLoad={() => setLoading(false)} className="spline" scene="https://prod.spline.design/VlAd4WmOD1IJbEpJ/scene.splinecode" />
      <div>
        <section>
          <Menu/>
          <Header/>
        </section>
        {/*<section>*/}
        {/*  <Content/>*/}
        {/*</section>*/}
      </div>
      <Home/>
    </>
  )
}