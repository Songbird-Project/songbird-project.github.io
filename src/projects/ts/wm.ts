import { mount } from 'svelte'
import '../app.css'
import WindowManager from '../lib/window-manager.svelte'

const app = mount(WindowManager, {
  target: document.getElementById('app')!,
})

export default app
