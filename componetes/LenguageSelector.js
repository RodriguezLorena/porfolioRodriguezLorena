import React from "react";
import { useRouter } from "next/router";

const LenguageSelector = () => {
  const router = useRouter();
  console.log(router);

  const changeLanguage = (e) => {
    console.log(e.target.value);
    router.push(router.pathname, router.pathname,
         { locale: e.target.value })
  };
  return (
    <select onChange={changeLanguage}>
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LenguageSelector;
