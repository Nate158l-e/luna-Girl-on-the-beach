import stringifyAll from 'licia/stringifyAll'
import h from 'licia/h'
import 'luna-object-viewer.css'
import ObjectViewer from 'luna-object-viewer.js'
import readme from './README.md'
import { addReadme } from 'storybook-readme/html'
import { withKnobs, text, boolean, button } from '@storybook/addon-knobs'

export default {
  title: 'Object Viewer',
  decorators: [withKnobs, addReadme],
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
}

export const objectViewer = () => {
  const container = h('div')

  const target = text('Target', 'navigator')
  const unenumerable = boolean('Show Unenumerable', true)
  const accessGetter = boolean('Access Getter', true)

  if (window[target]) {
    const objectViewer = new ObjectViewer(container, {
      unenumerable,
      accessGetter,
    })

    objectViewer.set(window[target])

    button('Destroy', () => {
      objectViewer.destroy()
      return false
    })
  }

  return container
}
