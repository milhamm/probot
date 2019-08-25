const schedule = require('node-schedule');

class Scheduler {
  constructor() {
    this.scheduler = schedule;
    this.activeScheduler = null;
  }

  schedulePush(uniqueName, time, callback) {
    this.scheduler.scheduleJob(uniqueName, time, callback);
  }
  setSchedule(schedulerActive) {
    console.log('Scheduler Active: ', schedulerActive);
    this.activeScheduler = schedulerActive;
  }
  cancelSchedule() {
    console.log(this.activeScheduler);
    this.activeScheduler.cancel();
  }
}

module.exports = Scheduler;
