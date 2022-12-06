import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";


const LenguageSelector = ({es, en, pt}) => {
  const router = useRouter();
  console.log(router);

  const changeLanguage = (e) => {
    console.log(e.target.value);
    router.push(router.pathname, router.pathname,
         { locale: e.target.value })
  };
  return (
    <select onChange={changeLanguage}>
      <option value="es">🇪🇸</option>
      <option value="en">🇺🇸</option>
      <option value="pt">🇵🇹</option>
    </select>
  );
};

export default LenguageSelector;
