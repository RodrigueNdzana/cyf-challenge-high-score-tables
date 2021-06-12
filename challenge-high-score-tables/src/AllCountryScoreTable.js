import React from 'react';
import AllCountriesScoreData from './AllCountriesScoreData';
function AllCountryScoresTable(){
    function compare(lowerLetter, biggerLetter) {
  if (lowerLetter.name < biggerLetter.name) {
    return -1;
  } else if (lowerLetter.name< biggerLetter.name) {
    return 1;
  } else {
    return 0;
  }
}
    return(
        <div className="MainContent">  

        <div className="Header">
            <h1>High Score per Country</h1>
            <button>Toggle button</button>
        </div>
        {AllCountriesScoreData.sort(compare)
        .map((data,index) =>
             //return (
               
               <div className="MainContentData">
                  <h1>{data.name}</h1>
                  <table className="TableContainer">
                     <tbody>
                       {data.scores.sort((a,b) => b.s - a.s)
                       .map((playerInfo) => {
                           return(
                               <tr key={playerInfo.s} className="table-row">
                                  <td className="playerInfoName">{playerInfo.n}</td>
                                  <td className="playerInfoCore">{playerInfo.s       }</td>
                               </tr>
                           )
                       })
                       }
                     </tbody>
                  </table>
               </div>
           //)
        )}
        </div>
        
    )
}
export default AllCountryScoresTable;