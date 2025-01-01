import { useEffect, useState } from "react";

import { getCurrentTime, getDateTime } from "@/helpers";

const useTime = () => {
   const { date, time } = getDateTime();
   const [currentTime, setCurrentTime] = useState(time);

   useEffect(() => {
      setInterval(() => setCurrentTime(getCurrentTime()), 10);
   }, [currentTime]);

   return { date, currentTime };
};

export default useTime;
