import React from "react";
import DataTable from "../../components/datatable/DataTable";
import "./FarmList.scss";

const FarmList = () => {
  return (
    <section className="farm-list">
      <h2>Çiftlik Listesi</h2>
      <DataTable />
    </section>
  );
};

export default FarmList;
