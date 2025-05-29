function generateTimeSlots({
    startTime,
    endTime,
    appointmentDuration,
    hasLunchBreak,
    lunchStart,
    lunchEnd
}) {
    const parseTime = (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
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

module.exports = generateTimeSlots