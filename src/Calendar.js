import React, {useState} from "react";

function Calendar(){

  const today = new Date();
  const [date,setDate] = useState(today);

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year,month,1).getDay();
  const daysInMonth = new Date(year,month+1,0).getDate();

  const monthNames = [
    "January","February","March","April",
    "May","June","July","August",
    "September","October","November","December"
  ];

  const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  const prevMonth = ()=>{
    setDate(new Date(year,month-1,1));
  };

  const nextMonth = ()=>{
    setDate(new Date(year,month+1,1));
  };

  const cells=[];

  for(let i=0;i<firstDay;i++){
    cells.push(<div className="cell empty"></div>);
  }

  for(let d=1;d<=daysInMonth;d++){

    const isToday =
      d===today.getDate() &&
      month===today.getMonth() &&
      year===today.getFullYear();

    cells.push(
      <div className={`cell ${isToday?"today":""}`}>
        <span className="date">{d}</span>
      </div>
    );
  }

  return(

    <div className="calendar">

      <div className="calendar-top">

        <button onClick={prevMonth}>◀</button>

        <h2>{monthNames[month]} {year}</h2>

        <button onClick={nextMonth}>▶</button>

      </div>

      <div className="calendar-header">
        {days.map(day=>(
          <div className="day">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {cells}
      </div>

    </div>

  );
}

export default Calendar;