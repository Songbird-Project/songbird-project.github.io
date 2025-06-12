import { mount } from 'svelte'
import '../app.css'
import OperatingSystem from '../lib/operating-system.svelte'

const app = mount(OperatingSystem, {
  target: document.getElementById('app')!,
})

export default app
