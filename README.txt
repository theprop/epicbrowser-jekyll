Epic Privacy Browser — static site
==================================
Upload the contents of this folder to the web root of epicbrowser.com.

Files
  index.html, key-features.html, faq.html, about-us.html, contact-us.html,
  donate.html, custom-browser.html, thank-you.html,
  tou.html, privacy-policy.html, androidfeatures.html
  spread_epic/index.html, mac_keychain/index.html, privacy/intro/index.html, email/index.html  (folder-style URLs)
  privacy/intro.html and email.html are duplicates so both URL forms work; edit both when updating.
  css/fonts.css   @font-face rules (self-hosted fonts)
  css/epic.css    all site styles
  js/epic.js      download links + OS detection + small interactions (no dependencies)
  fonts/          Instrument Serif + DM Sans (woff2, SIL Open Font License)

Updating download links
  Edit DOWNLOADS / EPIC_VERSION at the top of js/epic.js only.
  Every Download button on every page goes to thank-you.html, which reads them.

Dependencies
  Images: your own https://epicbrowser.com/assets/img/ (already hosted; switch to /assets/img/ once uploaded if you prefer relative paths).
  Email signup: your own nt.epicbrowser.com/email/email.php (iframe on thank-you.html).
  YouTube: the TEDx video embed on about-us.html (youtube-nocookie.com).
  Nothing else is loaded from third parties. No Google Fonts, no analytics, no frameworks.

Pretty URLs (GitHub Pages)
  Root pages use .html filenames (faq.html, donate.html ...). GitHub Pages also serves
  them without the extension (/faq, /donate), so existing links keep working.
  spread_epic/, mac_keychain/ and privacy/intro/ are folders with an index.html,
  so their trailing-slash URLs work as before.

Next Epic Update Fixes 
 seen in mac arm build.  on open or first run, top message use epic as pdf viewer, need to replace chromium logo with epic.  remove epic web store in drop-down menu under extensions, just call it extension webstore.  
