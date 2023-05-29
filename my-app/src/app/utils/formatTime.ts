import { intervalToDuration } from "date-fns";

export const formatTime = (seconds: number) => {
  const timeDuration = intervalToDuration({
     start: new Date(0),
     end: new Date(seconds * 1000),
  });
  const zeroPad = (num: number, decimalPlace: number) => String(num).padStart(decimalPlace, '0')

  if (timeDuration.hours! > 0) {
    return `${zeroPad(timeDuration.hours!, 1)}:${zeroPad(timeDuration.minutes!, 1)} (hh:mm)`
  }

  if (timeDuration.minutes! > 0) {
    return `${zeroPad(timeDuration.minutes!, 1)}:${zeroPad(timeDuration.seconds!, 2)} (mm:ss)`
  }

  return `${zeroPad(timeDuration.minutes!, 2)}:${zeroPad(timeDuration.seconds!,2)} (mm:ss)`;

};
