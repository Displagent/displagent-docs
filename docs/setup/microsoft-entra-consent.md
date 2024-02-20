---
title: Microsoft Entra Consent
description: A detailed guide for granting admin consent to Displagent through the Microsoft Entra ID service in the Azure portal.
---

# Microsoft Entra Consent

This is a detailed guide on how to grant consent to Displagent through Microsoft Entra ID in the Azure portal.

If you had to send a request consent message to your company's IT department, then please refer them to this guide as necessary.

## Granting Consent

1. First go to the Azure portal.
2. Navigate to the Microsoft Entra ID service.
3. Go to `Enterprise Applications` using the left-side nav menu.

<p align="center">
    <img src="./entra-enterprise-applications.png" />
</p>

4. Once inside of `Enterprise Applications`, find the application entitled `Displagent Integration`. Click on this application.

<p align="center">
    <img src="./entra-displagent-integration.png" />
</p>

5. Once inside of `Displagent Integration`, use the left-side nav menu to go to the `Permissions` tab.
6. You should see a `Grant admin consent` button. Please click this button to authenticate Displagent to your Azure tenant.

<p align="center">
    <img src="./entra-grant-consent.png" />
</p>

If you are concerned about what permissions Displagent is reqesting, then please review the permissions listed on this page.

::: tip
Remember: Displagent only **reads** the *metadata* of your Power BI artifacts and embeds them onto a page, it **does not** *write* any data to your Power BI tenant.
:::