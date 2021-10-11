import { CDP } from './CDP-config.js';
import Calendar from './components/Calendar.js';
import DateInput from './components/DateInput.js';

export default class CalendarDatePicker {
  constructor(containerSelector, minYear, maxYear, startDate, futureDatesOnly = false) {
    this.startDate = startDate;
    this.containerSelector = containerSelector;
    this.container = document.querySelector(containerSelector);
    this.minYear = minYear;
    this.maxYear = maxYear;
    this.futureDatesOnly = futureDatesOnly;
    this.calendar = null;
    this.calendarOpen = false;
    this.firstCalendarOpen = true;
    this.addAllEventListeners();
  }

  addAllEventListeners() {
    window.addEventListener('load', this.buildDateInputOnLoad.bind(this));
    this.container.addEventListener('click', this.toggleCalendarDatePickerEvent.bind(this));
  }

  buildDateInputOnLoad() {
    new DateInput(this.containerSelector, this.startDate);
  }

  toggleCalendarDatePickerEvent(e) {
    if (
      e.target.classList[0] === CDP.classNames.openCalendarIcon ||
      e.target.parentNode.classList[0] === CDP.classNames.openCalendarIcon ||
      e.target.parentNode.parentNode.parentNode.classList[0] === CDP.classNames.openCalendarIcon
    ) {
      this.removeAndRebuildEventListeners();
      this.rebuildCalendar();
    } else if (
      e.target.classList[0] === CDP.classNames.closeBtn ||
      e.target.classList[0] === CDP.classNames.closeBtnX
    ) {
      this.calendarOpen = false;
      new DateInput(this.containerSelector, this.calendar.getFullSelectedDateString());
    }
  }

  closeCalendar() {
    new DateInput(this.containerSelector, this.calendar.getFullSelectedDateString());
    this.calendarOpen = false;
  }

  removeAndRebuildEventListeners() {
    this.container.replaceWith(this.container.cloneNode(true));
    this.container = document.querySelector(this.containerSelector);
    this.addAllEventListeners();
  }

  rebuildCalendar() {
    if (this.calendarOpen) {
      return;
    } else {
      this.calendar = new Calendar(
        this.containerSelector,
        this.futureDatesOnly,
        this.maxYear,
        this.minYear,
        this.startDate
      );
      this.calendarOpen = true;
    }
  }
}
