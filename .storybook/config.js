import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'react-material-ripple',
  url: 'https://github.com/gyorgygutai/react-material-ripple',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
});

function loadStories () {
  require('../stories/Ripple.story');
}

configure(loadStories, module);
