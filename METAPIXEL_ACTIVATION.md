# Meta Pixel Activation Implementation Plan

This plan outlines the steps to correctly integrate the Meta Pixel code into the website, ensuring it is placed within the `<head>` tags as requested.

## User Review Required

> [!IMPORTANT]
> I noticed there is already an existing `MetaPixel` component in the codebase. I will be updating it with the exact code you provided and moving its placement to the `<head>` section.

## Proposed Changes

### Components & Layout

---

#### [MODIFY] [meta-pixel.tsx](file:///c:/Projects/hvac-claudecode/components/analytics/meta-pixel.tsx)

- Update the component to include the exact Meta Pixel script provided.
- Add the `<noscript>` fallback tag as provided.
- Use the Pixel ID `1484610646363719` directly to ensure it matches your account.

#### [MODIFY] [layout.tsx](file:///c:/Projects/hvac-claudecode/app/layout.tsx)

- Move the `<MetaPixel />` component call from the bottom of the `<body>` to the `<head>` section.
- This ensures the pixel starts loading as early as possible, following Meta's best practices and your specific instructions.

## Implementation Details

The `MetaPixel` component will be updated to:
```tsx
import Script from "next/script";

export function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1484610646363719');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1484610646363719&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
```

In `app/layout.tsx`, it will be moved:
```tsx
<head>
  {/* ... existing schema scripts ... */}
  <MetaPixel />
</head>
```

## Verification Plan

### Automated Tests
- I will use the browser tool to inspect the rendered page and verify that the Meta Pixel script and noscript tag are present in the `<head>` and working correctly.
- Check browser console for any Pixel initialization errors.

### Manual Verification
- Confirm that the `PageView` event is being tracked (can be verified with "Meta Pixel Helper" browser extension if available, or by checking network requests).
