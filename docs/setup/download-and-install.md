---
title: Download and Install
description: A detailed guide on how to download Displagent and install it on your respective operating system.
---

# Download and Install

Since Displagent is a cross-platform desktop application, you will need to download and install it on your machine. Here is a brief guide on how to do that.

## Download Displagent

To download Displagent, please visit the main site's [download page](https://www.displagent.io/download) and click the download icon that is appropriate for your machine's operating system.

::: tip
To confirm that you have downloaded the correct file type for your machine, please look to the file extension reference table below.
:::

| Operating System | File Extension | Status |
| :---: | :---: | :---: |
| Windows | `.exe` | Supported |
| Mac OS | `.dmg` | Coming soon |
| Linux | `.AppImage` | Supported |

## Raspberry Pi

If you plan to run Displagent on a Raspberry Pi, please see the requirements below.

### Architecture

Please install the **64-bit version of Raspberry OS (formerly called Raspbian)** on your Raspberry Pi. This is because the `.AppImage` executable is built on a 64-bit Ubuntu virtual machine.

::: tip
If you don't know what the architecture is for your Raspberry Pi, open up a terminal and type `uname -m`. If you see `aarch64`, then you know that you are running a 64-bit version of Raspberry OS.
:::

### Models

**I recommend the Raspberry Pi 4 Model B (8 GB).** 

The Raspberry Pi Model 4 B comes in three different RAM capacities, namely, the 2 GB, 4 GB, and 8 GB.

Displagent is confirmed to run extremely well on the 8 GB model, the 4 GB model is yet to be determined, but the 2 GB model has proven insufficient with early users and is therefore not recommended.

## Install Displagent

To install Displagent, simply open/run the executable file. Displagent will install itself on your machine **relative to your user account**, so it is unlikely that you will require admin permissions to install.

::: tip
For example, on Windows, the default installation path will be: `C:\Users\<user>\AppData\Roaming\Displagent`.
:::

### AppImage Installation

If you are installing Displagent on a Linux machine (such as a Raspberry Pi), then you may need to do two things:

1. Right-click the `.AppImage` file and **enable execution permissions**. You can also do this from the terminal by running `chmod +x Displagent-Setup-linux-arm64.AppImage`. See this [AppImage guide](https://docs.appimage.org/introduction/quickstart.html) for an example.
2. If the `.AppImage` file will still not execute, your machine may need to have the `libfuse2` package installed (`AppImages` are known to rely on this package). To install, open a terminal and run `sudo apt install libfuse2`.

::: warning Important
If you are running Displagent on a Raspberry Pi, you may need to run step #2.
:::