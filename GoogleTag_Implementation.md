# Google Tag Manager Implementation Plan

This plan outlines the integration of Google Tag Manager (GTM) into the Next.js application to enable advanced tracking and marketing analytics.

## User Review Required

> [!IMPORTANT]
> The GTM Container ID provided is `GTM-M5PDJ5PC`. Please confirm if this is the correct production container ID.

## Proposed Changes

### Analytics Components

We will create a new component to house the GTM scripts, keeping the `layout.tsx` clean and following the project's existing pattern for third-party scripts.

#### [NEW] [google-tag-manager.tsx](file:///c:/Projects/hvac-claudecode/components/analytics/google-tag-manager.tsx)
- Implement `GTMHead` and `GTMBody` components.
- `GTMHead`: Uses `next/script` to load the GTM library with the `afterInteractive` strategy (or `beforeInteractive` if immediate tracking is required).
- `GTMBody`: Provides the `<noscript>` iframe fallback for users with JavaScript disabled.

### Root Layout

#### [MODIFY] [layout.tsx](file:///c:/Projects/hvac-claudecode/app/layout.tsx)
- Import the new GTM components.
- Inject `GTMHead` into the `<head>` section.
- Inject `GTMBody` at the very beginning of the `<body>` tag, as per Google's best practices.

### Environment Variables

#### [MODIFY] [.env.example](file:///c:/Projects/hvac-claudecode/.env.example)
- Add `NEXT_PUBLIC_GTM_ID` to the template.

---

## Technical Details

### GTM Script (Head)
```tsx
<Script id="gtm-script" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `}
</Script>
```

### GTM Noscript (Body)
```tsx
<noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>
```

## Verification Plan

### Automated Tests
- N/A (Tracking scripts are typically verified manually or via browser automation in E2E tests).

### Manual Verification
1.  **Google Tag Assistant**: Deploy to a preview environment and use the Tag Assistant extension to verify the container is active.
2.  **Data Layer Inspection**: Open the browser console and type `dataLayer` to ensure it is initialized and contains the `gtm.js` event.
3.  **DOM Inspection**: Verify the `<noscript>` iframe is present immediately after the `<body>` tag.
