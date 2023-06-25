import React from "react";

const ItalyUpdateCases = ({ todayData, yesterdayData }) => {
  const dead = todayData.deceduti;
  const deadYesterday = yesterdayData.deceduti;

  const healed = todayData.dimessi_guariti;
  const healedYesterday = yesterdayData.dimessi_guariti;

  const { variazione_totale_positivi, totale_positivi } = todayData;
  const positiveYesterday = yesterdayData.totale_positivi

  // const perceptualUpdate = (( variazione_totale_positivi / totale_positivi) * 100).toFixed(2)

  return (
    <div className="grid grid-cols-12 col-span-12 lg:col-start-3 lg:col-span-4 gap-4  text-center border-4 border-orange-800 ">
      <div className="p-4 col-span-12 border-black border-4  bg-ternary/30 text-center">
        <h3 className="text-3xl font-semibold">ItalyUpdateCases</h3>
      </div>

      <div className="test-card">
        <p>Morti </p>
        <span className="text-3xl">{(dead - deadYesterday).toLocaleString('it-IT')}</span>
        <p>Totale morti </p>
        <span className="text-3xl">{dead.toLocaleString('it-IT')}</span>
        
      </div>
      <div className="test-card">
        <p>Guariti </p>
        <span className="text-3xl">{(healed - healedYesterday).toLocaleString('it-IT')}</span>
        <p>Totale guariti </p>
        <span className="text-3xl">{healed.toLocaleString('it-IT')}</span>
      </div>
      <div className="test-card">
        <p>Variazione positivi </p>
        <span className="text-3xl">{variazione_totale_positivi.toLocaleString('it-IT')}</span>
        <p>totale positivi </p>
        <span className="text-3xl">{totale_positivi.toLocaleString('it-IT')}</span>
      </div>
    </div>
  );
};

export default ItalyUpdateCases;
