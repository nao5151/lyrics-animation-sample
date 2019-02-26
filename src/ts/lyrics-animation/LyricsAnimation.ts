import anime from 'animejs'
import { defaultOption, Option } from './default-option'
import { Lyrics, LyricsParams } from './Lyrics';

export default class LyricsAnimation {
  public onEnd = () => {}
  private option: Option
  private lyrics: Lyrics[]
  private timeline = anime.timeline({
    autoplay: false,
    easing: 'easeOutQuad',
    complete: () => {
      this.onEnd()
    }
  })

  constructor(lyrics: LyricsParams[], option: Option = {}) {
    this.option = {
      ...defaultOption,
      ...option,
      classNames: {
        ...defaultOption.classNames,
        ...option.classNames
      }
    }
    this.lyrics = lyrics.map(lyricsParams => new Lyrics(lyricsParams, this.option.classNames))

    this.appendStyle()
    this.appendLyrics()
  }
  
  public get paused() {
    return this.timeline.paused
  }

  public start() {
    this.timeline.play()
  }

  public pause() {
    this.timeline.pause()
  }

  private appendStyle() {
    const style = document.createElement('style')
    style.innerHTML = `
      .${this.option.classNames.char} {
        opacity: 0;
      }
    `
    document.head.appendChild(style)
  }

  private appendLyrics() {
    const container = document.querySelector(`.${this.option.classNames.container}`)

    this.lyrics.forEach(lyrics => {
      this.timeline.add({
        targets: lyrics.targets,
        keyframes: [
          {
            opacity: 1,
          },
          {
            opacity: 0,
            delay: this.fadeOutDelay.bind(this)
          }
        ],
        duration: this.option.duration,
        delay: this.fadeInDelay.bind(this)
      }, lyrics.time.toMilliSeconds())

      container.appendChild(lyrics.element)
    })
  }

  private fadeInDelay(target: HTMLElement, index: number, targetsLength: number): number {
    return index * this.option.fadeInDelay
  }

  private fadeOutDelay(target: HTMLElement, index: number, targetsLength: number): number {
    return (targetsLength * 0.5) * this.option.fadeInDelay
  }
}
