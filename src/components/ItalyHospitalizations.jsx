import React from "react";

const ItalyHospitalizations = ({ todayData, yesterdayData }) => {
  const {
    ricoverati_con_sintomi,
    terapia_intensiva,
    totale_ospedalizzati,
    isolamento_domiciliare,
    ingressi_terapia_intensiva,
  } = todayData;

  const ricoveratiYesterday = yesterdayData.ricoverati_con_sintomi;
  const isolamentoYesterday = yesterdayData.isolamento_domiciliare;

  return (
    <div className="grid grid-cols-12 col-span-12 lg:col-start-8 lg:col-span-4 gap-4  text-center border-4 border-orange-800">
      
      <div className="col-span-12 p-4 border-black border-4  bg-ternary/50 text-center">
        <h3 className="text-3xl font-semibold">ItalyHospitalizations</h3>
        <span className="text-3xl font-bold">{totale_ospedalizzati.toLocaleString("it-IT")}</span>
      </div>

      <div className="test-card">
        <p>Terapia intensiva</p>
        <span className="text-3xl">
          {ingressi_terapia_intensiva.toLocaleString("it-IT")}
        </span>
        <p>Totale Terapia Intensiva </p>
        <span className="text-3xl">
          {terapia_intensiva.toLocaleString("it-IT")}
        </span>
      </div>
      <div className="test-card">
        <p>Ricoveri </p>
        <span className="text-3xl">
          {(ricoverati_con_sintomi - ricoveratiYesterday).toLocaleString(
            "it-IT"
          )}
        </span>
        <p>Totale ricoverati </p>
        <span className="text-3xl">
          {ricoverati_con_sintomi.toLocaleString("it-IT")}
        </span>
      </div>
      <div className="test-card">
        <p>Isolamento domiciliare </p>
        <span className="text-3xl">
          {(isolamento_domiciliare - isolamentoYesterday).toLocaleString(
            "it-IT"
          )}
        </span>
        <p>Totale Isolamento domiciliare </p>
        <span className="text-3xl">
          {isolamento_domiciliare.toLocaleString("it-IT")}
        </span>
      </div>
    </div>
  );
};

export default ItalyHospitalizations;
