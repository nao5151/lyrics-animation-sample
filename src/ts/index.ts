import LyricsAnimation, { LyricsParams, Option } from './lyrics-animation';

console.log('hi')

const LYRICS: LyricsParams[] = [
  {
    text: 'Lorem ipsum',
    time: '0:00'
  },
  {
    text: 'dolor sit amet consectetur adipisicing elit',
    time: '0:02'
  },
  {
    text: 'adipisicing elit',
    time: '0:06'
  },
  {
    text: 'Ab ad',
    time: '0:08'
  },
  {
    text: 'sint et aperiam in minus maiores',
    time: '0:09'
  },
  {
    text: 'est nobis praesentium accusamus eum enim harum?',
    time: '0:12'
  },
  {
    text: 'Doloremque error',
    time: '0:16'
  },
  {
    text: 'sapiente',
    time: '0:18'
  },
  {
    text: 'quia',
    time: '0:19'
  },
  {
    text: 'ex',
    time: '0:20'
  },
  {
    text: 'ratione',
    time: '0:21'
  },
  {
    text: 'fin.',
    time: '0:23'
  },
]
const option: Option = {
  classNames: {
    container: 'container'
  }
}
const lylicsAnimation = new LyricsAnimation(LYRICS, option)

const button = document.querySelector('.button')
const icon = button.querySelector('.fas')
button.addEventListener('click', () => {
  if (lylicsAnimation.paused) {
    lylicsAnimation.start()
    icon.classList.add('fa-pause')
    icon.classList.remove('fa-play')
  } else {
    lylicsAnimation.pause()
    icon.classList.add('fa-play')
    icon.classList.remove('fa-pause')
  }
})
lylicsAnimation.onEnd = () => {
  icon.classList.add('fa-play')
  icon.classList.remove('fa-pause')
}
