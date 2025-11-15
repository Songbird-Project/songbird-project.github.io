<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import type { LayoutProps } from "./$types";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faHeart } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome";

  import "../app.css";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="navbar bg-base-100 shadow-sm mb-5">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <details>
            <summary>Projects</summary>
            <ul>
              <li><a href="/projects">About</a></li>
              <li><a href="/projects/songbird-os">SongbirdOS</a></li>
              <li><a href="/projects/nest">Nest</a></li>
              <li><a href="/projects/swallow">Swallow</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <span class="text-xl">The Songbird Project</span>
  </div>
  <div class="navbar-end"></div>
</div>

<div class="flex flex-col items-center justify-center mb-5">
  <div role="alert" class="alert alert-error alert-soft w-[90%] text-center">
    <span
      >Many of the projects listed have not been started or are in early
      development. If you would like to help speed up development then please
      feel free to make pull requests. If you would like to show your support
      through other means, donations are available at <a
        class="link"
        href="https://support-songbird.carrd.co">support-songbird.carrd.co</a
      >.</span
    >
  </div>
</div>

{@render children()}

<footer
  class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4"
>
  <aside class="grid-flow-col items-center">
    <img src={favicon} alt="Songbird Project Logo" class="h-8" />
    <p>
      Copyright © {new Date().getFullYear()} The Songbird Project
    </p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/Songbird-Project"><Icon data={faGithub} /></a>
    <a href="https://support-songbird.carrd.co"><Icon data={faHeart} /></a>
  </nav>
</footer>
