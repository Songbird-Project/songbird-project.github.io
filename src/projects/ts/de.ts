import { mount } from 'svelte'
import '../app.css'
import DesktopEnvironment from '../lib/desktop-environment.svelte'

const app = mount(DesktopEnvironment, {
  target: document.getElementById('app')!,
})

export default app
