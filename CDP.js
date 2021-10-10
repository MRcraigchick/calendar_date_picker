import { CDP } from './CDP-config.js';
import CalendarDatePicker from './componants/CalendarDatePicker.js';
import DateInput from './componants/DateInput.js';

const dateToday = new Date().toDateString().split(' ');
const container = document.querySelector(`.${CDP.classNames.mainContainer}`);
let calendar = null;

window.addEventListener('load', () => {
  new DateInput(`${dateToday[2]}/${DateInput.getMonthNumberFromShortName(dateToday[1])}/${dateToday[3]}`);
});

container.addEventListener('click', (e) => {
  try {
    if (
      e.target.classList[0] === CDP.classNames.openCalendarIcon ||
      e.target.parentNode.classList[0] === CDP.classNames.openCalendarIcon ||
      e.target.parentNode.parentNode.parentNode.classList[0] === CDP.classNames.openCalendarIcon
    ) {
      calendar = new CalendarDatePicker(CDP.calConfig.futureDatesOnly, CDP.calConfig.maxYear, CDP.calConfig.minYear);
    } else if (
      e.target.classList[0] === CDP.classNames.closeBtn ||
      e.target.classList[0] === CDP.classNames.closeBtnX
    ) {
      return new DateInput(calendar.getFullSelectedDateString());
    }
  } catch {
    null;
  }
});
