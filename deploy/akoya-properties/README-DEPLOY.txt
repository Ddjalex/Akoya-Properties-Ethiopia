================================================================
AKOYA PROPERTIES — DEPLOYMENT INSTRUCTIONS (cPanel + Node.js)
================================================================

This bundle contains your production-ready website.
Domain: akoyarealestatesales.com

----------------------------------------------------------------
WHAT'S INSIDE
----------------------------------------------------------------
  index.html         <- The main HTML page
  assets/            <- All JS, CSS and image files (hashed)
  favicon.svg
  opengraph.jpg
  robots.txt
  sitemap.xml
  app.js             <- Node.js startup file (Express server)
  package.json       <- Dependencies (only "express")
  .htaccess          <- Fallback Apache rewrite rules

----------------------------------------------------------------
OPTION A — RECOMMENDED: Static Hosting (no Node.js needed)
----------------------------------------------------------------
Your site is a single-page React app — it does not strictly
need Node.js to run. The simplest path:

  1. In cPanel File Manager, open  public_html/
  2. Click "Upload" and upload EVERY file in this folder
     EXCEPT app.js and package.json
     (you can skip those if you choose this option)
  3. Make sure .htaccess was uploaded (it may be hidden — enable
     "Show Hidden Files" in File Manager Settings).
  4. Visit https://akoyarealestatesales.com — done.

----------------------------------------------------------------
OPTION B — Node.js App (what you asked for)
----------------------------------------------------------------
If you want it to run as a Node.js app under cPanel's
"Setup Node.js App" tool:

  1. In cPanel File Manager, open  public_html/
  2. Upload EVERY file from this bundle into public_html/
     (drag the whole folder contents in).

  3. Open cPanel  ->  "Setup Node.js App"  ->  CREATE APPLICATION
     Fill in the form:

       Node.js version       : pick the HIGHEST available
                               (16 or higher is best; 10 will
                               also work because app.js uses
                               only CommonJS / ES5 syntax)
       Application mode      : Production
       Application root      : public_html
       Application URL       : akoyarealestatesales.com   (leave path empty)
       Application startup   : app.js

     Click CREATE.

  4. After it is created, in the same panel click
     "Run NPM Install" — this installs Express.

  5. Click "START APP" (or "Restart").

  6. Visit https://akoyarealestatesales.com

----------------------------------------------------------------
TROUBLESHOOTING
----------------------------------------------------------------
* Blank page / 404 on refresh
    Make sure .htaccess is present in public_html/
    (Option A) OR that the Node.js app is running (Option B).

* Images not loading
    All images live in the assets/ folder — make sure that
    folder uploaded completely. The largest file is ~6 MB
    (Novelty Tower render); upload may take a minute on slow
    connections.

* "Cannot find module 'express'"
    You skipped the "Run NPM Install" step in cPanel.
    Re-open Setup Node.js App and click it.

* Port already in use
    cPanel passes the correct port via the PORT environment
    variable; app.js already uses it. Don't hard-code a port.

----------------------------------------------------------------
RE-DEPLOYING AFTER FUTURE CHANGES
----------------------------------------------------------------
Whenever the site code is updated, just regenerate this bundle
(re-build and re-zip), then re-upload — overwriting the
existing files in public_html/.
