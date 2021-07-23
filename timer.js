'use strict';


class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.timerId = null;
      this.selector = selector;
      this.targetDate = targetDate;
  
      this.updateDate()
        
    };
  
    getRefs() {
      return {
        days: document.querySelector(
          `${this.selector} [data-value="days"]`,
        ),
        hours: document.querySelector(
          `${this.selector} [data-value="hours"]`,
        ),
        mins: document.querySelector(
          `${this.selector} [data-value="mins"]`,
        ),
        secs: document.querySelector(`${this.selector} [data-value="secs"]`),
      };
    };
  
    pad(value) {
      return String(value).padStart(2, '0');
    };
  
  
    updateDate() {
      this.timerId = setInterval(() => {
        const time = this.targetDate - Date.now();
        const { days, hours, mins, secs } = this.getRefs();
  
        days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  
        hours.textContent = this.pad(Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ));
  
        mins.textContent = this.pad(Math.floor(
          (time % (1000 * 60 * 60)) / (1000 * 60),
        ));
        
        secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      }, 1000);
    }
  };
  
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 25, 2022 19:39'),
});

const timer2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('May 25, 2023 19:39'),
});
