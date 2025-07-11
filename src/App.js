import React, { useState } from "react";
import "./App.css";

const data = {
  "July 11": {
    summary: [
      ["Shows", "622"],
      ["Tickets Sold", "3089"],
      ["Gross", "$86,248.46"],
    ],
    chains: [
      ["Chain", "Shows", "Gross"],
      ["Cinemark", "330", "$76,302.63"],
      ["AMC", "70", "$3,433.38"],
      ["Regal", "113", "$5,034.94"],
      ["Others", "109", "$1,477.51"],
    ],
    states: [
      ["State", "Shows", "Gross"],
      ["AZ", "8", "$1274.16"],
      ["FL", "27", "$3625.18"],
      ["TX", "136", "$46201.92"],
      ["LA", "4", "$0.00"],
      ["CA", "56", "$4985.00"],
      ["MS", "1", "$53.50"],
      ["GA", "8", "$159.50"],
      ["AR", "5", "$27.16"],
      ["NV", "5", "$50.00"],
      ["NM", "3", "$107.64"],
      ["OK", "4", "$27.16"],
      ["TN", "1", "$0.00"],
      ["NC", "13", "$2572.46"],
      ["VA", "21", "$1445.00"],
      ["MO", "9", "$211.19"],
      ["KS", "9", "$92.96"],
      ["KY", "6", "$556.50"],
      ["IL", "38", "$1587.70"],
      ["WV", "1", "$0.00"],
      ["MD", "9", "$1990.06"],
      ["CO", "5", "$363.16"],
      ["IN", "7", "$450.00"],
      ["OH", "38", "$3304.75"],
      ["DE", "4", "$475.00"],
      ["PA", "26", "$2753.75"],
      ["NJ", "28", "$2452.72"],
      ["UT", "4", "$161.16"],
      ["NE", "8", "$0.00"],
      ["NY", "21", "$275.00"],
      ["IA", "12", "$53.50"],
      ["CT", "9", "$1370.00"],
      ["WI", "31", "$0.00"],
      ["MI", "14", "$75.00"],
      ["MA", "9", "$325.00"],
      ["NH", "4", "$975.00"],
      ["ID", "1", "$0.00"],
      ["MN", "8", "$297.33"],
      ["OR", "6", "$850.00"],
      ["ME", "2", "$0.00"],
      ["WA", "17", "$7100.00"],
      ["MT", "4", "$0.00"],
    ],
  },
  "July 9": {
    summary: [
      ["Shows", "340"],
      ["Tickets Sold", "1510"],
      ["Gross", "$42,091.37"],
    ],
    chains: [
      ["Chain", "Shows", "Gross"],
      ["AMC", "57", "$0.00"],
      ["Cinemark", "258", "$41,242.63"],
      ["Others", "5", "$107.24"],
      ["Regal", "20", "$741.50"],
    ],
    states: [
      ["State", "Shows", "Gross"],
      ["AZ", "8", "$324.96"],
      ["FL", "6", "$32.10"],
      ["TX", "86", "$27,273.82"],
      ["LA", "1", "$0.00"],
      ["MS", "1", "$53.50"],
      ["CA", "45", "$1,895.00"],
      ["GA", "2", "$0.00"],
      ["AR", "3", "$0.00"],
      ["NV", "5", "$0.00"],
      ["NM", "3", "$0.00"],
      ["NC", "11", "$643.44"],
      ["VA", "10", "$180.00"],
      ["KS", "5", "$0.00"],
      ["KY", "6", "$291.50"],
      ["WV", "1", "$0.00"],
      ["CO", "3", "$0.00"],
      ["OH", "23", "$1,004.75"],
      ["MD", "1", "$0.00"],
      ["DE", "4", "$450.00"],
      ["PA", "19", "$1,875.00"],
      ["NJ", "14", "$799.80"],
      ["UT", "4", "$0.00"],
      ["IL", "18", "$314.50"],
      ["IN", "2", "$0.00"],
      ["IA", "6", "$0.00"],
      ["CT", "9", "$710.00"],
      ["MI", "10", "$75.00"],
      ["NH", "3", "$650.00"],
      ["MA", "2", "$0.00"],
      ["ID", "1", "$0.00"],
      ["NY", "1", "$0.00"],
      ["OR", "6", "$350.00"],
      ["WA", "17", "$5,168.00"],
      ["MT", "4", "$0.00"],
    ],
  },
};

function Table({ title, data }) {
  return (
    <div className="table-section">
      <h2>{title}</h2>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex === 0 ? "header" : ""}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={rowIndex === 0 ? "th" : ""}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [selectedDate, setSelectedDate] = useState("July 11");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const { summary, chains, states } = data[selectedDate];

  return (
    <div className="App">
    <h1>
  HHVM USA Bookings 
  <a href="https://twitter.com/TeluguHarry" target="_blank" rel="noopener noreferrer">
     @TeluguHarry
  </a>
</h1>

      <div className="dropdown-container">
        <label htmlFor="date-select">Select Date: </label>
        <select id="date-select" value={selectedDate} onChange={handleDateChange}>
          <option value="July 9">July 9</option>
          <option value="July 11">July 11</option>
        </select>
      </div>

      <Table title="Summary" data={summary} />
      <Table title="By Chain" data={chains} />
      <Table title="By State" data={states} />
    </div>
  );
}

export default App;
