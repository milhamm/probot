const schedule = require('node-schedule');

class Scheduler {
  constructor() {
    this.scheduler = schedule;
  }

  schedulePush(uniqueName, time, callback) {
    this.scheduler.scheduleJob(uniqueName, time, callback);
  }
  setSchedule(scheduler) {
    console.log('Scheduler Active: ', scheduler);
    this.activeScheduler = scheduler;
  }
  cancelSchedule() {
    console.log(this.activeScheduler);
    this.activeScheduler.cancel();
  }
}

module.exports = Scheduler;
