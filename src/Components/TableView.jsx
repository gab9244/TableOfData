// material ul  é uma biblioteca que fornece alguns componente prontos
import PropTypes from "prop-types";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
export const TableView = ({ data }) => {
  //Estado para as páginas
  const [page, setPage] = useState(0);
  //Estado para definir quantas colunas por páginas precissamos
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //Função responsavel pela mudança das páginas
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //Função responsavel peça quantidade de linhas por página
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* Adicione seus cabeçalhos de coluna aqui */}
              <TableCell>Created Date</TableCell>
              <TableCell>Data Source Modified Date</TableCell>
              <TableCell>Entity Type</TableCell>
              <TableCell>Operating Status</TableCell>
              <TableCell>Legal Name</TableCell>
              <TableCell>DBA Name</TableCell>
              <TableCell>Physical Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Mailing Address</TableCell>
              <TableCell>USDOT Number</TableCell>
              <TableCell>MC/MX/FF Number</TableCell>
              <TableCell>Power Units</TableCell>
              <TableCell>MCS-150 Form Date</TableCell>
              <TableCell>Out of Service Date</TableCell>
              <TableCell>State Carrier ID Number</TableCell>
              <TableCell>DUNS Number</TableCell>
              <TableCell>Drivers</TableCell>
              <TableCell>MCS-150 Mileage Year</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Credit Score</TableCell>
              <TableCell>Record Status</TableCell>
              {/* Adicione mais células de cabeçalho conforme necessário */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.created_dt}</TableCell>
                  <TableCell>{row.data_source_modified_dt}</TableCell>
                  <TableCell>{row.entity_type}</TableCell>
                  <TableCell>{row.operating_status}</TableCell>
                  <TableCell>{row.legal_name}</TableCell>
                  <TableCell>{row.dba_name}</TableCell>
                  <TableCell>{row.physical_address}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.mailing_address}</TableCell>
                  <TableCell>{row.usdot_number}</TableCell>
                  <TableCell>{row.mc_mx_ff_number}</TableCell>
                  <TableCell>{row.power_units}</TableCell>
                  <TableCell>{row.mcs_150_form_date}</TableCell>
                  <TableCell>{row.out_of_service_date}</TableCell>
                  <TableCell>{row.state_carrier_id_number}</TableCell>
                  <TableCell>{row.duns_number}</TableCell>
                  <TableCell>{row.drivers}</TableCell>
                  <TableCell>{row.mcs_150_mileage_year}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.credit_score}</TableCell>
                  <TableCell>{row.record_status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

// Validação das props
TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
