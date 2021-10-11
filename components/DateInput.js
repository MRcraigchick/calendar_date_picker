import { CDP } from '../CDP-config.js';
import Cal from '../lib/CalendarDates.js';
import { calendarXML } from '../icons/calendarXML.js';

export default class DateInput {
  constructor(containerSelector, initialValue = undefined) {
    this.container = document.querySelector(containerSelector);
    this.dateToday = new Date().toDateString().split(' ');
    this.initialValue = initialValue;
    this.dateInputHTMLMarkup(this.initialValue);
  }
  dateInputHTMLMarkup(value) {
    this.container.innerHTML = `
          <div class="${CDP.classNames.dateInputContainer}">
            <input type="text" class="${CDP.classNames.dateInput}" value="${value}" />
            <div class="${CDP.classNames.openCalendarIcon}">
              ${calendarXML}
            </div>
          </div>  
        `;
  }

  static getMonthNumberFromShortName(sName) {
    for (let month of Cal.getMonthsList()) {
      if (month.shortName === sName) {
        return month.pos;
      }
    }
  }
}
