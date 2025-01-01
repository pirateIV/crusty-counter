function formatDate(options: Intl.DateTimeFormatOptions, date: Date) {
   return Intl.DateTimeFormat("en-US", options).format(date);
}

export function getTodaysDate() {
   const date = new Date();

   const day = formatDate({ day: "2-digit" }, date);
   const weekday = formatDate({ weekday: "short" }, date);
   const month = formatDate({ month: "short" }, date);
   const year = formatDate({ year: "numeric" }, date);

   return `${weekday}, ${day} ${month} ${year}`;
}

export function getCurrentTime() {
   const date = new Date();

   let hours = date.getHours().toString().padStart(2, "0");
   let minutes = date.getMinutes().toString().padStart(2, "0");

   return `${hours}:${minutes}`;
}

// function getTimeDisplay() {
   
// }

export function getDateTime(): { time: string; date: string } {
   return {
      date: getTodaysDate(),
      time: getCurrentTime(),
   };
}
