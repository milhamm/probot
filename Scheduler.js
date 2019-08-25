const schedule = require('node-schedule');

class Scheduler {
  constructor() {
    super();
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
