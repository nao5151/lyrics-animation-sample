import { ClassNames } from './default-option'
import Time from './Time'

export interface LyricsParams {
  text: string
  time: string
}

export class Lyrics {
  public element: HTMLParagraphElement
  public readonly text: string
  public readonly time: Time

  constructor(
    params: LyricsParams,
    private readonly classNames: ClassNames
  ) {
    this.time = new Time(params.time)
    this.text = params.text
    this.createElement()
  }

  public get targets() {
    return this.element.querySelectorAll(`.${this.classNames.char}`)
  }

  private createElement() {
    this.element = this.createContainer()
    const charBase = this.createChar()

    this.text.split('').forEach(str => {
      const char = charBase.cloneNode()
      char.textContent = str
      this.element.appendChild(char)
    })
  }

  private createContainer() {
    const p = document.createElement('p')
    p.classList.add(this.classNames.line)
    return p
  }

  private createChar() {
    const span = document.createElement('span')
    span.classList.add(this.classNames.char)
    return span
  }
}
