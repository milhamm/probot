const schedule = require('node-schedule');

class Scheduler {
  constructor() {
    this.scheduler = schedule;
  }

  schedulePush(time, callback) {
    this.scheduler.scheduleJob(time, callback);
  }

  cancelSchedule() {
    this.scheduler.cancel();
  }
}

module.exports = Scheduler;
