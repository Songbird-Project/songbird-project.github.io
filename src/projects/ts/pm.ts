import { mount } from 'svelte'
import '../app.css'
import PackageManager from '../lib/package-manager.svelte'

const app = mount(PackageManager, {
  target: document.getElementById('app')!,
})

export default app
