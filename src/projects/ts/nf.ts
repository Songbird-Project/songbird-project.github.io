import { mount } from 'svelte'
import '../app.css'
import NotFound from "../lib/not-found.svelte"

const app = mount(NotFound, {
  target: document.getElementById('app')!,
})

export default app
