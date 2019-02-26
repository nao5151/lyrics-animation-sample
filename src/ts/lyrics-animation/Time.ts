export default class Time {
  private hour = 0
  private minute = 0
  private seconds = 0

  constructor(time = '00:00') {
    const splitTime = time.split(':')

    switch (splitTime.length) {
      case 1:
        this.seconds = Number(splitTime[0])
        break;
      case 2:
        this.minute = Number(splitTime[0])
        this.seconds = Number(splitTime[1])
        break;
      case 3:
        this.hour = Number(splitTime[0])
        this.minute = Number(splitTime[1])
        this.seconds = Number(splitTime[2])
        break;
    }
  }

  toSeconds() {
    return this.hour * 3600 + this.minute * 60 + this.seconds
  }

  toMilliSeconds() {
    return this.toSeconds() * 1000
  }
}