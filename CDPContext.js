import CalendarDatePicker from './CDP.js';

class CDPcontext {
  constructor() {
    this.loadedCalendarDatePickers = [];
  }
  appendNewCDP(containerSelector, minYear, maxYear, startDate, futureDatesOnly) {
    this.loadedCalendarDatePickers.push(
      new CalendarDatePicker(containerSelector, minYear, maxYear, startDate, futureDatesOnly)
    );
  }
  getLoadedCDPs() {
    return this.loadedCalendarDatePickers;
  }
  isOpen() {
    let openCals = [];
    for (let cal of this.loadedCalendarDatePickers) {
      if (cal.calendarOpen) {
        openCals.push(cal);
      }
    }
    return openCals;
  }

  closeCalendars() {
    for (let cal of this.loadedCalendarDatePickers) {
      try {
        cal.closeCalendar();
      } catch {
        null;
      }
    }
  }
}

export default () => {
  return new CDPcontext();
};
