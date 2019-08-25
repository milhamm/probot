const schedule = require('node-schedule');

class Scheduler {
  constructor() {
    this.scheduler = schedule;
  }

  schedulePush(uniqueName, time, callback) {
    this.scheduler.scheduleJob(uniqueName, time, callback);
  }
  setSchedule(scheduler) {
    this.activeScheduler = scheduler;
  }
  cancelSchedule() {
    this.activeScheduler.cancel();
  }
}

module.exports = Scheduler;
