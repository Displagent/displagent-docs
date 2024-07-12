---
title: Slideshow Repairs
description: 
---

# Slideshow Repairs

With the help of Displagent, Power BI is an excellent technology to display for digital signage. However, sometimes Power BI visuals, reports, and dashboards encounter transient errors that can interrupt a smooth-running slideshow. These errors may be through no fault of your own, neither Displagent's, yet sometimes they occur nonetheless.

To help counter this issue, Displagent has a slideshow repair feature to help maintain a smooth, reliable digital signage experience.

## Algorithms

### Rolling Retry Window

If an error is detected within a slideshow, Displagent will trigger a repair event internally and validate whether or not it should attempt to repair the slideshow. The app uses a simple algorithm optimized to handle long-running, continuous digital signage where transient errors infrequently occur and is described in detail below:

1. If an error is detected within a slideshow, a validation check is sent to the Slideshow Repair module to see if a repair attempt is allowed.
2. The algorithm allows 3 repair attempts within a 1-hour window from the timestamp of repair attempt 1.
3. If a 4th repair attempt is attempted *within* the 1-hour window of repair attempt 1, then it will fail the validation check and the slideshow error will stay displayed on your TV.

::: danger Slideshow breakage
If a repair attempt fails as described in this case, then your slideshow will likely break and you will need to intervene.
:::

4. On the other hand, if a 4th repair attempt is attempted *outside* of the 1-hour window of repair attempt 1, then the previous repair attempts are deleted and the 4th repair attempt now becomes the new repair attempt 1 (and thus the 1-hour window is reset).

I call this the Rolling Retry Window algorithm.

The idea behind this algorithm is to strike an even balance between providing graceful retry functionality into your slideshows while also preventing the app from getting stuck in an infinite retry loop.

For example, since the algorithm resets its repair attempts count and time window after 1 hour elapses from the first repair attempt, then, if your slideshow had an error popup every few days, Displagent would continuously and gracefully handle any transient errors from Power BI and self-correct without you even noticing.

## Repair Behavior

If a repair attempt passes validation and is successfully triggered, then Displagent will do the following:

1. The slideshow will be stopped and exited, and Displagent will reroute itself to a Slideshow Repair page.
2. If you go to this page normally, you will not see any information on it. However, if the app automatically routes itself to this page via a repair attempt, then you will see a 3-second countdown timer begin counting down once the page loads.
3. Once the countdown timer reaches 0, the app will reroute itself back to your original slideshow and attempt a relaunch.

Per the countdown timer, all of this happens in a short span of time, and that's the intention here: we want a minimal amount of interruption on your TVs and to (hopefully) quickly correct the problem without having to bother you.

<br />
<video controls="controls" src="./displagent-slideshow-repairs.mp4" />

## Supported Slideshows

The following slideshow types are supported in the Slideshow Repairs module:

- Report Slideshows
- Compound Slideshows