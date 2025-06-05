const moment = require('moment');

function generateTimeSlots({
  startTime,
  endTime,
  appointmentDuration,
  hasLunchBreak,
  lunchStart,
  lunchEnd
}) {
  const parseTime = (timeStr) => {

    const [h, m, s] = timeStr.split(':').map(Number);
    console.log(h * 60 + m);
    return h * 60 + m;
  };

  const formatTime = (minutes) => {
    const h = String(Math.floor(minutes / 60)).padStart(2, '0');
    const m = String(minutes % 60).padStart(2, '0');
    return `${h}:${m}`;
  };
  const start = parseTime(startTime);
  const end = parseTime(endTime);
  const lunchStartMins = hasLunchBreak ? parseTime(lunchStart) : null;
  const lunchEndMins = hasLunchBreak ? parseTime(lunchEnd) : null;

  const slots = [];

  for (let current = start; current + appointmentDuration <= end; current += appointmentDuration) {
    const next = current + appointmentDuration;

    if (hasLunchBreak && next > lunchStartMins && current < lunchEndMins) {
      continue;
    }

    slots.push({
      start: formatTime(current),
      end: formatTime(next)
    });
  }

  return slots;
}
const dayNames = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function getWeekendByIndex(index) {
  return dayNames[index];
}

function getTimeFormat(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

function parseTimeFormat(timeStr) {
  const [hoursStr, minutesStr] = timeStr.split(':');

  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  return hours * 60 + minutes;
}

function getReadableTimeRanges(times) {
  const groups = {};

  for (const t of times) {
    const key = `${t.timeStart}-${t.timeEnd}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(t.weekend);
  }

  const result = [];

  for (const key in groups) {
    const [start, end] = key.split('-').map(Number);
    const days = groups[key].sort((a, b) => a - b);

    let range = '';
    if (days.length === 1) {
      range = `${dayNames[days[0]]}`;
    } else {
      range = `${dayNames[days[0]]} - ${dayNames[days[days.length - 1]]}`;
    }

    result.push(`${range}: ${getTimeFormat(start)} - ${getTimeFormat(end)}`);
  }

  return result;
}

const availableTimeSlot = (timeSlots = [], busyTimes = []) => {
  if (timeSlots.length == 0) return []
  if (busyTimes.length == 0) {
    return timeSlots.map(i => {
      return {
        ...i,
        available: true
      }
    })
  }

  return timeSlots.map(slot => {
    const [hStart, mStart] = slot.start.split(':').map(Number);
    const [hEnd, mEnd] = slot.end.split(':').map(Number);
    const slotStart = hStart * 60 + mStart;
    const slotEnd = hEnd * 60 + mEnd;

    const isBooked = busyTimes.some(busyTime => {
      const busyStart = busyTime.time;
      const busyEnd = busyStart + (busyTime.duration || 0);
      // console.table({
      //   busyStart,
      //   busyEnd,
      //   slotStart,
      //   slotEnd,
      //   isOverlap: !(busyEnd <= slotStart || busyStart >= slotEnd)
      // });

      return !(busyEnd <= slotStart || busyStart >= slotEnd)
    });

    return {
      ...slot,
      available: !isBooked
    };
  });
}

function calculateEndDate(useStart, duration) {
  if (!useStart || !duration) {
    return "Không có thông tin";
  }

  const startDate = moment(useStart, 'YYYY-MM-DD', true);
  if (!startDate.isValid()) {
    return "Không có thông tin";
  }

  const endDate = startDate.clone().add(duration, 'days');
  return endDate.format('YYYY-MM-DD');
}

function isMedicineStillInUse(useStart, duration) {
    const startDate = moment(useStart, 'YYYY-MM-DD');
    const endDate = startDate.clone().add(duration, 'days');
    const today = moment();

    return today.isSameOrBefore(endDate, 'day') && today.isSameOrAfter(startDate, 'day');
}

module.exports = {
  generateTimeSlots,
  getWeekendByIndex,
  getReadableTimeRanges,
  parseTimeFormat,
  availableTimeSlot,
  isMedicineStillInUse,
  calculateEndDate
}