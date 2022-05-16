import 'luna-music-player.css'
import story from '../share/story'
import h from 'licia/h'
import $ from 'licia/$'
import MusicPlayer from 'luna-music-player.js'
import { object } from '@storybook/addon-knobs'
import readme from './README.md'

const def = story(
  'music-player',
  (wrapper) => {
    $(wrapper)
      .css({
        width: 640,
        margin: '0 auto',
        maxWidth: '100%',
      })
      .html('')
    const container = h('div')
    wrapper.appendChild(container)

    const audio = object('Audio', [
      {
        url: 'https://test.surunzi.com/audio/Get_along.mp3',
        cover: 'https://res.liriliri.io/luna/getAlong.jpg',
        title: 'Get Along',
        artist: '林原めぐみ',
      },
      {
        url: 'https://test.surunzi.com/audio/Give_a_reason.mp3',
        cover: 'https://res.liriliri.io/luna/giveAReason.jpg',
        title: 'Give a Reason',
        artist: '林原めぐみ',
      },
      {
        url: 'https://test.surunzi.com/audio/Breeze.mp3',
        cover: 'https://res.liriliri.io/luna/breeze.jpg',
        title: 'Breeze',
        artist: '林原めぐみ',
      },
    ])

    const musicPlayer = new MusicPlayer(container, {
      audio,
    })

    return musicPlayer
  },
  {
    readme,
    source: __STORY__,
  }
)

export default def

export const { musicPlayer } = def
