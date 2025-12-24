---
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

