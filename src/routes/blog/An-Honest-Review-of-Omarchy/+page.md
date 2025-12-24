---
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
