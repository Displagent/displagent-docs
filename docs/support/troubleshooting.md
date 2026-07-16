---
title: Troubleshooting
description: If you experience issues with Displagent, read through some common errors and troubleshooting scenarios.
---

# Troubleshooting

On this page, you'll find common errors and troubleshooting scenarios that Displagent users may have experienced in the past. Hopefully this can assist you if you're having any slideshow or desktop app issues!

## Report Slideshows

### Visuals perpetually blank

**Description:**

In rare circumstances, users have reported that sometime after a report slideshow is started, all of the slideshow visuals go blank on all slides and stay perpetually blank until the slideshow is restarted.

Each time this has occurred, it was because of a too-frequent [refresh interval configuration](/report-slideshows/create-report-slideshow#slideshow-configurations) for the report slideshow.

In simple terms, sometimes Power BI refreshes can take longer than expected to execute, and if this occurs, then the report slideshow's internal **refresh loop** trips over itself because each new refresh request is initiated before the previous refresh request has completed. This causes the sequence of refresh requests to perpetually trip over themselves and blank out the visuals.

**Fix:**

As a quick reminder, a Power BI report (semantic model) can have various kinds of [storage modes](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-storage-mode):

- The default, most common, and generally-recommended storage mode is called `Import Mode`.
- However, there are use cases when users requires the `Direct Query` or `Live Connection` storage modes.

**If using `Direct Query` or `Live Connection`:**

Measure the average refresh duration for the report's visuals, including *both* **the time that the refresh executes** + **the visual lag time**.

You can do this by opening the associated Power BI report in the Power BI Service site and clicking the refresh button in the top-right corner of the report.

Measure the average refresh duration and ensure that your report slideshow's [refresh interval](/report-slideshows/create-report-slideshow#slideshow-configurations) is slightly higher than that average.

::: warning
Remember: with `Direct Query` and `Live Connection`, you are actually making direct datasource requests **straight to the datasource itself** rather than using the Power BI Service as an intermediate caching layer like with `Import Mode` refreshes. Ensure that your target datasources can handle the load from your fleet of Displagent devices.
:::

**If using `Import Mode`:**

While this scenario is less common, it could be the case that you have an extremely large semantic model, and when its `Import Mode` refreshes occur in the Power BI Service, the refresh caches are very large. Thus, when the associated report is opened, fetching the latest refresh cache could induce a higher-than-expected **visual lag time**.

So if you experience this issue while using `Import Mode`, measure the **visual lag time** that occurs when fetching a new `Import Mode` refresh cache.

You can do this by:

1. Opening the semantic model in the Power BI Service site and executing a manual refresh.
2. Once the manual refresh is complete, open the associated Power BI report in the Power BI Service site and click the refresh button in the top-right corner of the report. You want to measure the **visual lag time** after clicking that button.

Once calculated, ensure that your report slideshow's [refresh interval](/report-slideshows/create-report-slideshow#slideshow-configurations) is slightly higher than that average.