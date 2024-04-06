---
title: Autolaunch
description: A brief guide on what autolaunch is and how to set it up inside of Displagent.
---

# Autolaunch

Autolaunch is a feature which allows Displagent to automatically start a Slideshow and Slideshow Type of your choosing after Autostart launches your app. This is an essential and highly-requested feature to give your display a true unattended, kiosk-like experience.

In order for Autolaunch to work successfully, you MUST make sure that Autostart is configured. Please read the [Autostart](/setup/autostart) guide if you have not done so, this is very important since Autostart needs to work first before Autolaunch can work.

::: warning Autostart ≠ Autolaunch
Please note that Autostart and Autolaunch are **two distinct features** in Displagent. Autostart is responsible for simply opening the app on machine startup/reboot. Autolaunch, on the other hand, is responsible for automatically launching a slideshow of your choosing *after the app is opened by Autostart*.
:::

When you choose the autolaunch settings (as discussed on the following page), Displagent will create an `autolaunchsettings.json` file on your machine to easily execute autolaunch anytime the app starts.

::: warning Important
Each autolaunch is isolated to the machine that Displagent is installed on. Consequently, you will need to setup autolaunch on each machine that you install Displagent on.
:::