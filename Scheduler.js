const schedule = require('node-schedule');

class Scheduler {
  constructor() {
    this.scheduler = schedule;
  }

  schedulePush(uniqueName, time, callback) {
    this.scheduler.scheduleJob(uniqueName, time, callback);
  }

  cancelSchedule(uniqueName) {
    this.anu = this.scheduler.scheduledJobs(uniqueName);
    this.anu.cancel();
  }
}

module.exports = Scheduler;
