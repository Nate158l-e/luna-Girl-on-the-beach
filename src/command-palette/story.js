import 'luna-command-palette.css'
import CommandPalette from 'luna-command-palette'
import story from '../share/story'
import readme from './README.md'

const def = story(
  'command-palette',
  (container) => {
    const commandPalette = new CommandPalette(container)
    commandPalette.show()

    return commandPalette
  },
  {
    readme,
    source: __STORY__,
  }
)

export default def

export const { commandPalette } = def