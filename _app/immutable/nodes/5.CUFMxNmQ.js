import{_ as O}from"../chunks/CWJ_suhZ.js";import{_ as T}from"../chunks/DI-sR8B2.js";import{_ as A}from"../chunks/DFt4lS2m.js";import{_ as j}from"../chunks/BIKTh8Ek.js";import{_ as N}from"../chunks/Ba3oLWiy.js";import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{ap as R,aq as P,C as f,A as r,t as l,y as D,B as h,N as H,x as a}from"../chunks/sjHtPtAm.js";import{s as w}from"../chunks/TZ43r7Xo.js";import{f as x,a as b}from"../chunks/B6MCMdZy.js";import{e as L,i as $}from"../chunks/Dx7lzGS2.js";import{s as v}from"../chunks/BDrZgQcG.js";import{i as U}from"../chunks/msQAKMQL.js";import{p as B}from"../chunks/B4pvmnDE.js";const M=`---
title: "An Honest Review of Omarchy"
author: "vaelixd"
date: "07/09/2025"
tags: ["Testing Linux Distros", "Software"]
---

I recently tried out [*Omarchy*](https://omarchy.org/) live on [stream](https://www.twitch.tv/videos/2560283164). It was obvious from my reaction what I thought of the setup and everything it contained. And, my disappointment with its default state.

## The Problem

For me, there's one major problem with Omarchy and that's all of the bloat that it comes installed with. A lot of it comes from web apps that the install script populates your setup with. Some of those include **two** different AI clients, those being Grok and ChatGPT. Not only that but it also comes preloaded with the entire LibreOffice suite, OBS, Signal, Kdenlive, 1Password and Typora. The latter two being commercial and closed-source. I feel that it's a big problem since it adds unnecessary bloat to the system which ultimately limits what you can do with the resulting environment.

Another, more minor, problem with Omarchy is DHH's choice of basic apps. Personally, these are the terminal, browser, launcher, text editor and screen recorder. In terms of launcher, I have absolutely no issue with Omarchy using Walker. But, Alacritty, Chromium and (wf/wl)-screen-recorder are used for the terminal, browser and screen recorder respectively. There's nothing explicitly wrong with these choices, but I feel like they're just not the right ones. Kitty should be substituted in for Alacritty since it's just so much more configurable; Firefox or one of its derivatives should replace Chromium since Google is not usually defaulted to on Linux systems; and gpu-screen-recorder should drop in for (wf/wl)-screen-recorder due to it being more efficient on resources.  

## The Solution

So, those are the problems I have with Omarchy in it's current state. But, with that said I can also offer a simple solution to both issues.

The issue of Omarchy's default apps is simple to solve. Simply, switch each of the installed apps with their replacements in the install script. It wouldn't change any systems that exist already but it seems like the best solution that's also simple to implement.

The larger issue, with all of the bloat, can be fixed in a similar way. My suggestion would be to add a new section to the installer with the ability to opt into installing extra software such as web apps and non-free software. Apps can be organised under categories which could be selected while also having the option to select individual apps.

## The Verdict

Overall, I found my experience with Omarchy to be underwhelming and, to an extent, frustrating. It definitely didn't live up to the hype and certainly fell short of expectations. I would give it an overall rating of **4/10**. However, that's just my personal opinion and I'm sure that for some people it's near perfect and everything they need.
`,F=`---
title: "NixOS One Year Later"
author: "vaelixd"
date: "26/10/2025"
tags: ["Testing Linux Distros", "Project Announcement",  "Software"]
---

Almost one year ago I tried NixOS on stream, the [VOD](https://www.youtube.com/watch?v=p8AK-0H3rVE) is available on YouTube and has an accompanying highlight [video](https://www.youtube.com/watch?v=7RQ-Y6gNBWU). At the time I was still relatively new to the world of Linux and it was extremely apparent.

Since then, I've continued to use Linux, specifically EndeavourOS, as my daily driver and I've become significantly more comfortable with the ecosystem and how it functions.

With this extra experience, I decided to go back and try NixOS once again. This time utilising as much of its abilities as I could. I learnt a lot while configuring the system and I'm still learning the ins and outs of it all.

## Flakes

One thing that I didn't touch or try to use in my initial experience were [Nix flakes](https://nixos-and-flakes.thiscute.world), which are experimental but still widely used. The reason for this was not only being unaware of what they were but also wanting to have a "pure" NixOS system.

However, with my most recent encounter, I've found flakes to be vital for my setup. This is due to the [nixpkgs repo](https://search.nixos.org/packages?channel=unstable&query=) not containing all the software that I needed for my rice, namely the [caelestia shell](https://github.com/caelestia-dots/shell) and [zen browser](https://zen-browser.app).

I've yet to actually write a flake for a program that I need and they are still extremely new to me but I'm sure that I'll become more comfortable with them with some more experience.

## Home Manager

Another key part of my new setup is [Home Manager](https://nix-community.github.io/home-manager/). Although it can be used as a NixOS module, I chose to use a standalone install. While this may not be the most nix way, I find it to be much simpler for my use case.

Once you get your head around how it works it becomes a relatively intuitive system, until you find the heap of stuff that you're completely clueless about.

The premise of Home Manager is simple. Put all of your user configs and programs in one manageable place and then symlink the applicable configs to the correct places and install the declared programs.

## Why I Love It

Becoming somewhat capable of using the system has been an absolute pleasure. Configuring it has been significantly simpler than I expected and using it has been smoother too.

Its declarative nature means it's config once, use everywhere which is a workflow that I really like. It means that I can store my dotfiles on GitHub or another remote platform and whenever I need them, simply pull them down and get going without having to worry about what programs I had installed before.

## Have I Switched?

I am still currently on EndeavourOS but I do plan on switching to my NixOS system at some point in the near future. The dotfiles I've built are available on GitHub, under the [Onix Theme](https://github.com/Onix-Theme) organisation, and are free to download, use, modify, contribute to, derive, etc.

Even though I have aimed to do my best with everything there, there's still almost certainly several issues with what I have. So, if you want to help me out and contribute then go ahead.

Overall, it's been a pretty smooth experience and I look forward to switching, most likely sometime next year, and learning even more about NixOS and its capabilities.
`,W=`---
title: 'The Plan for SongbirdOS'
author: 'vaelixd'
date: '27/10/2025'
tags: ["Songbird Project", "Project Update", "Software"]
---

> TL;DR
> SongbirdOS will be an immutable, declarative Arch-based distro, with a package management system like NixOS's built from the ground up. It's a learning experience, but may become more than that if the support exists.

On February 9th 2025, I started my most ambitious project ever. The development of a usable Linux distro, the project would be called SongbirdOS. Its base would be [Arch Linux](https://archlinux.org) and the plan was to make it easy for new Linux users to switch to it.

Not only that, but the plan was to build out a full suite of programs to ship with it. These would include a window manager, desktop environment, package manager and installer.

## The Problem

At the time I thought the idea was great. But, as time passed the project started to look more and more like every other Arch-based distro. And, eventually, I lost the motivation to consistently work on it. In my eyes the project had become completely irrelevant in a sea of other, pretty generic, distros. It didn't solve a problem and it brought a very average experience to something that people are already comfortable with.

So, I've decided to drop the initial project.

## What's the New Plan?

With that announcement out of the way, what's the new plan for SongbirdOS and its accomplices? For a while I just had nothing. No ideas, no motivation and no will to work on anything. That's why recent streams have been mainly testing out different distros and no new videos have gone up on the channel in months.

But this morning I woke up with a lot of ideas, most completely unrelated and mainly about food, but one stood out. The idea was a new design for the Songbird Project. Rather than being, "just another Arch-based distro," it would instead be an effective child of NixOS and Arch.

The idea mainly came about due to my recent experience with NixOS which I talked about on a [recent blog post](https://songbird-project-blog.pages.dev/blog/nixos-one-year-later/). I fell in love with how Nix handles packages. What I didn't love was the lack of some pre-built binaries and the need to go hunting for flakes rather than having them all in one centralised location. As well as that, flakes and Nix packages just aren't as common as other kinds like RPMs, Debs or Pkgbuilds.

## The Details

Only having thought of the idea this morning, I haven't had a lot of time to actually think about how the system will work. The details I have are rough and will most likely be changed or potentially even scrapped as time goes on.

The bulk of the idea is a package manager written from the ground up that pulls from the Arch repos and AUR and installs/builds the packages in a declarative and immutable manner, just like Nix does. And, a file system structure that resembles NixOS's.

The core features of the package manager would be:

- Using the main Arch Repos and AUR, which give you a wide range of packages
- User and home directory management similar to [Home Manager](https://nix-community.github.io/home-manager/)
- System configuration including system services and SSH configuration
- Simple, easy to use lists for packages, fonts and whatever else seems fit for it

Like I said already, the idea is still fresh and still needs a lot more thought before it's ready for development. I personally like the idea but I feel like it's quite niche and may not be something that anyone else wants. But, the main thing is that it's supposed to be a learning experience rather than an attempt to replace anything else or gain actual users. If the support for the project seems to be a decent size however, I may pivot that mindset and keep it actively maintained after I'm initially done with it. But, we'll cross that bridge when we get to it.

`,Y=`+++
title= "Revisiting the Fish Shell"
author= "vaelixd"
date= "2025-10-01"
tags= ["Software"]
draft= true
+++

About a year ago I streamed for the very first time. The topic of that stream was the [*Fish*]() shell. The [VOD] is still available to watch, but I absolutely wouldn't recommend it. After that short experience with the shell I decided to just stick with my tried and tested [*Zsh*]().

Since then, Fish has gone through a couple version changes and even a full Rust rewrite. So, I thought it would be a fitting time to take another look at it.

## First *Second* Impressions

Although I already had my first impressions with the shell when I initially tried it, I don't remember any specific things that stuck in my mind. So, trying it again was like seeing something familiar yet completely new.

`,C=`+++
title = 'The State of the AUR'
author = 'vaelixd'
date = '2025-10-01'
tags = ["Software"]
draft = true
+++

If you've ever used [*Arch Linux*]() or one of its derivatives then you've most likely heard of and potentially used the Arch User Repository, or [*AUR*]() for short. It's an awesome community driven space to share your programs in an **unofficial** way that means that they can be more easily installed on Arch, without having to get them on the main repos. Because it's a user space where **anyone** can upload their packages, it opens the door to malware which may, for a short time, go unnoticed. And, that's exactly what happened a couple months ago. There were a number of compromised packages that were uploaded to the AUR. These were labelled as patches and pre-compiled binaries that an unsuspecting user may install thinking it's a legitimate package. These packages were removed relatively quickly but not before some users managed to install them.

After the removal of all the compromised packages, things were fine for a little bit. That was until the AUR, and the Arch site in general, started experiencing [DDoS]() attacks. It's unclear who the DDoSes are from but it's safe to assume that the bad actors who uploaded the malware wanted some form of revenge.

`;function G(d){return d.replace(/^#+\s+/gm,"").replace(/(\*\*|__)(.*?)\1/g,"$2").replace(/(\*|_)(.*?)\1/g,"$2").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/!\[([^\]]*)\]\([^)]+\)/g,"").replace(/`([^`]+)`/g,"$1").replace(/^>\s+/gm,"").replace(/^[\*\-\+]\s+/gm,"").trim()}const q=async()=>{const d=Object.assign({"./An-Honest-Review-of-Omarchy/+page.md":O,"./NixOS-One-Year-Later/+page.md":T,"./The-Plan-for-SongbirdOS/+page.md":A,"./draft/Revisting-the-Fish-Shell/+page.md":j,"./draft/The-State-of-the-AUR/+page.md":N}),p=Object.assign({"./An-Honest-Review-of-Omarchy/+page.md":M,"./NixOS-One-Year-Later/+page.md":F,"./The-Plan-for-SongbirdOS/+page.md":W,"./draft/Revisting-the-Fish-Shell/+page.md":Y,"./draft/The-State-of-the-AUR/+page.md":C}),m=Object.entries(d).filter(([n])=>!n.includes("/draft/")).map(([n,o])=>{const c=o.metadata||{},s=n.replace("./","").replace("/+page.md",""),e=p[n]||"",t=G(e).split(`
`).filter(i=>i.trim()!=="").slice(6,8).join(" ").trim();return{slug:s,snippet:t,...c}});return m.sort((n,o)=>{if(!n.date||!o.date)return 0;const[c,s,e]=n.date.split("/"),[t,i,u]=o.date.split("/");return new Date(`${u}-${i}-${t}`).getTime()-new Date(`${e}-${s}-${c}`).getTime()}),{posts:m}},le=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));var z=x('<a><div role="alert" class="alert bg-base-100 flex flex-col items-start"><div class="text-lg"><time class="font-semibold"> </time> </div> <span> </span></div></a>'),E=x(`<div class="flex flex-col w-[90%] mx-auto gap-5 mb-10">The Songbird Project Blog is where our team share their thoughts and
  experiences of current technologies and software along with project updates
  and announcments. <!></div>`);function he(d,p){R(p,!1);let m=B(p,"data",8);const n=s=>{const[e,t,i]=s.split("/");return`${i}-${t}-${e}`};U();var o=E(),c=f(r(o));L(c,1,()=>(D(m()),l(()=>m().posts)),$,(s,e)=>{var t=z(),i=r(t),u=r(i),g=r(u),I=r(g,!0);h(g);var _=f(g);h(u);var y=f(u,2),k=r(y,!0);h(y),h(i),h(t),H(S=>{v(t,"href",(a(e),l(()=>`/blog/${a(e).slug}`))),v(g,"datetime",S),w(I,(a(e),l(()=>a(e).date))),w(_,` ${a(e),l(()=>a(e).title)??""}`),w(k,(a(e),l(()=>a(e).snippet)))},[()=>(a(e),l(()=>n(a(e).date)))]),b(s,t)}),h(o),b(d,o),P()}export{he as component,le as universal};
