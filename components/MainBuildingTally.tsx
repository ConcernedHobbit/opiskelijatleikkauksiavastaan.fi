"use client";

import differenceInDays from "date-fns/differenceInDays";
import Tally from "./Tally";

export default function MainBuildingTally() {
  const START_DAY = new Date(1695070800000);
  const DAYS_SINCE = differenceInDays(new Date(), START_DAY);

  return (
    <>
      <span className="sr-only">{DAYS_SINCE}</span>
      <Tally days={DAYS_SINCE} />
    </>
  );
}
