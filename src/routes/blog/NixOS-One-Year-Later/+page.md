---
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
