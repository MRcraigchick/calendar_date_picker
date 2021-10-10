// Config object that can be edited to change variubles in the main build

// A container must be defined in your main html file that the CDP date picker
// is to be included in and a class name must be set to that container and registered
// with the CDP.className.mainContainer property at the CDP-config.js file.

const yearNow = Number(new Date().toDateString().split(' ')[3]);

export const CDP = {
  calConfig: {
    futureDatesOnly: false,
    minYear: -Infinity,
    maxYear: Infinity,
  },

  // These are all css class names that are crucial to the functionality of the CDP date picker.

  // If it is not necessary to change them, then do not!

  // But if you must change them due to conflicts with other code in your project, then they must
  // be edited here then again changed within the .scss files as the selector names will no longer
  // correspond with the class names defined in the markup.

  // Do not edit JavaScript code relating to the CDP date picker outside of this file

  classNames: {
    // A container must be defined in your main html file that the CDP date picker
    // is to be included in and a class name must be set to that container and registered with
    // this mainContainer property

    mainContainer: 'calendar-date-picker',

    dateInputContainer: 'CDP-date-input-container',
    dateInput: 'CDP-date-input',
    openCalendarIcon: 'open-calendar-icon',

    body: 'CDP-body',
    header: 'CDP-header',
    closeBtn: 'CDP-close-btn',
    closeBtnX: 'CDP-close-btn-x',

    yearSelect: 'CDP-year-select',
    decrementYear: 'decrement-CDP-year',
    incrementYear: 'increment-CDP-year',
    yearValue: 'CDP-year-value',

    monthSelect: 'CDP-month-select',
    previousMonth: 'previous-CDP-month',
    nextMonth: 'next-CDP-month',
    monthDropdown: 'CDP-month-dropdown',
    monthOption: 'CDP-month-option',
    selectedMonth: 'selected-CDP-month',

    btnTriangleLeft: 'CDP-triangle-left',
    btnTriangleRight: 'CDP-triangle-right',

    dayGrid: 'CDP-day-grid',
    gridCell: 'CDP-day-grid-cell',
    weekdayNameContainer: 'CDP-weekday-name-container',
    weekdayName: 'CDP-weekday-name',
    dayNumberContainer: 'CDP-day-number-container',
    dayNumber: 'CDP-day-number',
    selectedDay: 'selected-CDP-day',
    FridayWeekday: 'CDP-Friday-weekday',
    showMonthOptions: 'show-CDP-month-options',
    greyedOutDay: 'greyed-out-CDP-day',
  },
};
