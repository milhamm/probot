const schedule = require('node-schedule');

class Scheduler {
  constructor(time, callback) {
    this.scheduler = schedule.scheduleJob(time, callback);
  }

  cancelSchedule() {
    this.scheduler.cancel();
  }
}

module.exports = Scheduler;
