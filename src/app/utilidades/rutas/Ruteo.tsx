import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuPantalonFemenino } from "../../componentes/Menu/MenuPantalonFemenino";
import { MenuPantalonMasculino } from "../../componentes/Menu/MenuPantalonMasculino";
import { MenuSueterFemenino } from "../../componentes/Menu/MenuSueterFemenino";
import { MenuSueterMasculino } from "../../componentes/Menu/MenuSueterMasculino";
import { AcercaDe } from "../../componentes/otros/AcercaDe";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      
      <Route path="/menpf" element={<MenuPantalonFemenino />} />
      <Route path="/menpm" element={<MenuPantalonMasculino />} />
      <Route path="/mensf" element={<MenuSueterFemenino />} />
      <Route path="/mensm" element={<MenuSueterMasculino />} />

      

      <Route path="/menacer" element={<AcercaDe />} />

      <Route path="*" element={<NoEncontrado />} />
      
    </Routes>
  );
};