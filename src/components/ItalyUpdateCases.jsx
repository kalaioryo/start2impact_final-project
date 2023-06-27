import React from "react";

const ItalyUpdateCases = ({ lastDayData, prevDayData }) => {
  const dead = lastDayData.deceduti;
  const deadPrevDay = prevDayData.deceduti;

  const healed = lastDayData.dimessi_guariti;
  const healedPrevDay = prevDayData.dimessi_guariti;

  const { variazione_totale_positivi, totale_positivi } = lastDayData;
  const positivePrevDay = prevDayData.totale_positivi

  // const perceptualUpdate = (( variazione_totale_positivi / totale_positivi) * 100).toFixed(2)

  return (
    <div className="test-container">

      {/* <div className="h-[200px] col-span-8">Chart</div> */}

      <div className="p-4 col-span-12 xl:col-span-3 border-black border-4  bg-ternary/30 text-center">
        <h3 className="text-2xl font-semibold">ItalyUpdateCases</h3>
      </div>

      <div className="test-card">
        <p>Morti </p>
        <span className="text-3xl">{(dead - deadPrevDay).toLocaleString('it-IT')}</span>
        <p>Totale morti </p>
        <span className="text-3xl">{dead.toLocaleString('it-IT')}</span>
        
      </div>
      <div className="test-card">
        <p>Guariti </p>
        <span className="text-3xl">{(healed - healedPrevDay).toLocaleString('it-IT')}</span>
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
