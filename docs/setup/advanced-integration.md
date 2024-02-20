---
title: Advanced Integration
description: A description of the Advanced Microsoft Integration in Displagent and a guide on how to set it up.
---

# Advanced Integration

This is the detailed guide for setting up the Advanced Microsoft Integration in Displagent.

## Required Credentials

The Advanced Integration requires five credentials from you:

* Azure App Registration
    * Azure Tenant ID
    * Azure App ID
    * Azure App Secret
* Power BI Service account
    * Username
    * Password


These are discussed in more details below and in the following pages.

## Azure App Registration

[As per Microsoft's own recommendation](https://learn.microsoft.com/en-us/power-bi/developer/embedded/register-app?tabs=customers), the easiest, least-painful, and most reliable way to authenticate a third-party application to your Power BI tenant is by creating an Azure App Registration in your company's Azure tenant.

Think of an Azure App Registration like a virtual gateway; using its associated credentials, you can allow a custom application to access your Power BI content.

This is exactly how the Advanced Integration accesses your Power BI content. See the dedicated docpage for how to set this up.

## Power BI Service Account

Additionally, it is **highly recommended** - though not _technically required_ - to provision a dedicated service account in your company's Azure Active Directory.

This service account will be used alongside your Azure App Registration to access your Power BI content. All you need is a username, a password, and a Power BI license.

::: warning
If you cannot currently provision a service account, don't worry: you can use your own Power BI account if you wish. However, to avoid dependencies on any one employee's active directory account, I highly stress provisioning a service account for uninterrupted usage.
:::

### Service Account Licensing

Like all Power BI users, your service account will require a Power BI license to be assigned to it from your Microsoft 365 admin. The type of Power BI license your service account requires is dependent on what Power BI content you want to access through it - in particular, what types of workspaces your Power BI content resides in.

For standard, shared-capacity workspaces, a Power BI Pro license is sufficient here. And if you have Power BI Premium, you don't have to worry about this at all because your entire tenant runs off of dedicated capacities.

However, if your company utilizes Power BI Premium Per User to access some of this content, then your service account will likely also need a Power BI Premium Per User license.

::: tip TL;DR;
In general, an easy rule of thumb is to give your service account the same license type that your other Power BI users have. At the end of the day, what matters most is knowing whether or not your content resides in a dedicated workspace. If it does not, a Power BI Pro license will probably do the job.
:::

### Multi-factor Authentication

If the Power BI serivce account that you choose to use requires multi-factor authentication, the Advanced Integration will NOT be able to authenticate you to Microsoft and the entire app will not work. This is a [known limitation](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc) with the Microsoft OAuth2.0 ROPC pattern.

If MFA is a requirement at your company, then you have two options:

1. Ask your IT department if they can provision a service account for you with an MFA exception/exemption.
2. Use the Standard Integration instead of the Advanced Integration.

### Federated Accounts

Please be aware that the Advanced Integration does **not** support [federated accounts](https://learn.microsoft.com/en-us/answers/questions/1163702/what-is-difference-between-federated-domain-vs-man) in Azure. This is due to the specific authentication flow that the Advanced Integration has to use with Microsoft. If you try to use a federated account as your service account, you will likely see a Microsoft error appear stating that you are using the wrong username or password.

::: danger How to know?
If you are positive that you are using the correct username and password for your service account, yet you keep getting a Microsoft error that your credentials are invalid, then you may very well be using a federated account in Azure without realizing it.
:::

If you are using a federated account, then you have two options:

1. Ask your IT department if they can make you an account with your company's default Azure domain instead, the domain that has `<your_default_domain>.onmicrosft.com` in its name. For example, a username like `dmiradakis@displagent.onmicrosoft.com`.
2. Use the Standard Integration instead of the Advanced Integration.