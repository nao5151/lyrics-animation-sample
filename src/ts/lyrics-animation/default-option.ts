export interface Option {
  duration?: number
  fadeInDelay?: number
  classNames?: ClassNames
}

export interface ClassNames {
  container?: string
  line?: string
  char?: string
}

export const defaultOption: Option = {
  duration: 1000,
  fadeInDelay: 50,
  classNames: {
    container: 'lyrics',
    line: 'lyrics-line',
    char: 'lyrics-char',
  }
}