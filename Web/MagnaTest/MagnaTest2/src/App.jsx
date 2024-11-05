import './App.css'
import Banner from './components/Banner/Banner.jsx'
import Header from './components/Header'
import About from './components/About'
import Tab from './components/Tab/Tab.jsx'
import Service from './components/Service'
import Footer from './components/Footer.jsx'
import {SERVICE_TEMPLATE} from './data'
import {HEADER_CONTENT} from './data'
import { useState } from 'react'

function App() {
  const [selectedHeader, setSelectedHeader] = useState("home");

  function handleClick(headerName){
    setSelectedHeader(headerName)
  }

  return (
    <>
    <Header/>

    <section id="window">
      <menu>
        <Tab onSelect={()=>handleClick("home")}>Home</Tab>
        <Tab onSelect={()=>handleClick("about")}>About</Tab>
        <Tab onSelect={()=>handleClick("services")}>Services</Tab>
        <Tab onSelect={()=>handleClick("contact")}>Contact</Tab>
      </menu>

      <About title={HEADER_CONTENT[selectedHeader].title} text={HEADER_CONTENT[selectedHeader].text}></About>

    </section>

    <section className="banner_main">
      <Banner/>
    </section>

    <section>
      <Service 
        title={SERVICE_TEMPLATE[0].title} 
        subTitle1={SERVICE_TEMPLATE[0].subTitle1} 
        subTitle2={SERVICE_TEMPLATE[0].subTitle2} 
        subTitle3={SERVICE_TEMPLATE[0].subTitle3} 
        subTitle4={SERVICE_TEMPLATE[0].subTitle4}
        src={SERVICE_TEMPLATE[0].src}
      />
      <Service 
        title={SERVICE_TEMPLATE[1].title} 
        subTitle1={SERVICE_TEMPLATE[1].subTitle1} 
        subTitle2={SERVICE_TEMPLATE[1].subTitle2} 
        subTitle3={SERVICE_TEMPLATE[1].subTitle3} 
        subTitle4={SERVICE_TEMPLATE[1].subTitle4}
        src={SERVICE_TEMPLATE[1].src}
      />
    </section>
    <div><br /></div>
  <Footer/>
</>
  )
}

export default App
