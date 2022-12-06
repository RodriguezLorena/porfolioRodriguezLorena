import PaginaInicial from "../componetes/PaginaInicial";
import Skill from "../componetes/Skill";
import SobreMi from "../componetes/SobreMi";
import Proyectos from "../componetes/Proyectos";
import Contacto from "../componetes/Contacto";
import Layout from "../componetes/Layout";

export default function Home(props) {
  const { preText, title, text, titleSm, textSm, titleHab, titlePro, title1, text1, title2, text2, title3, text3, title4, text4, title5, text5, titleCon, textCon, btnCallToAction ,spamContact}= props;
  console.log("ACA HAY ALGO ", props);
  return (
    <Layout>
      <PaginaInicial 
      preText={preText}
      title={title}
      text={text}/>
      <SobreMi 
      titleSm={titleSm}
      textSm={textSm}/>
      <Skill 
      titleHab={titleHab}/>
      <Proyectos 
      titlePro={titlePro}
      title1={title1}
      text1={text1}
      title2={title2}
      text2={text2}
      title3={title3}
      text3={text3}
      title4={title4}
      text4={text4}
      title5={title5}
      text5={text5} />
      <Contacto 
      titleCon={titleCon}
      textCon={textCon}
      btnCallToAction={btnCallToAction}
      spamContact={spamContact}/>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const res = await import(`../lenguajes/${locale}.json`);
  
  return {
    props: {
      preText: res.default.inicial.preText,
      title: res.default.inicial.title,
      text: res.default.inicial.text,

      titleSm: res.default.sobreMi.titleSm,
      textSm: res.default.sobreMi.textSm,

      titleHab: res.default.habilidades.titleHab,

      titlePro: res.default.proyectos.titlePro,
      title1: res.default.proyectos.title1,
      text1: res.default.proyectos.text1,
      title2: res.default.proyectos.title2,
      text2: res.default.proyectos.text2,
      title3: res.default.proyectos.title3,
      text3: res.default.proyectos.text3,
      title4: res.default.proyectos.title4,
      text4: res.default.proyectos.text4,
      title5: res.default.proyectos.title5,
      text5: res.default.proyectos.text5,

      titleCon: res.default.contacto.titleCon,
      textCon: res.default.contacto.textCon,
      btnCallToAction: res.default.contacto.btnCallToAction,
      spamContact: res.default.contacto.spamContact,
    },
  };
}
