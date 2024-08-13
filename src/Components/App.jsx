import { useState } from "react";
import { TableView } from "./TableView";
import {PivotTableView} from './PivotTableView';
import { PivotChartView } from "./PivotChartView";
import { Tabs, Tab, Box } from "@mui/material";
import FetchData from "./FetchData";

export const App = () => {
  const [view, setView] = useState("table");
  const [data, setData] = useState([]);

  const handleTabChange = (event, newValue) => {
    setView(newValue);
  };

  return (
    
    //Cada uma das tabs tem um valor e quando clicamos em uma delas atualizamos o valor do estado view com o valor daquela tab, a tab mostrada será aquela que possuir valor igual ao do estado, em outras palavras mostramos as tabs dinamicamente
    <Box>
      <Tabs value={view} onChange={handleTabChange}>
        <Tab label="Tabela" value="table" />
        <Tab label="Tabela Dinâmica" value="pivotTable" />
        <Tab label="Gráfico Dinâmico" value="pivotChart" />
      </Tabs>
      <FetchData onDataFetched={setData} />
      {view === "table" && <TableView data={data} />}
      {view === "pivotTable" && <PivotTableView data={data} />}
      {view === "pivotChart" && <PivotChartView data={data} />}
    </Box>
  );
};
