================================================================
AKOYA PROPERTIES - DEPLOYMENT (cPanel + Node.js, akoya subfolder)
================================================================
Domain: akoyarealestatesales.com
Application root in cPanel: akoya  (sits inside public_html)

----------------------------------------------------------------
EXPECTED FILE STRUCTURE AFTER UPLOAD + EXTRACT
----------------------------------------------------------------
public_html/
  akoya/                          <- Application root
    app.js                        <- startup file
    package.json
    .htaccess
    index.html
    favicon.svg
    opengraph.jpg
    robots.txt
    sitemap.xml
    assets/
      index-*.css
      index-*.js
      image_*.png   (about 24 image files)

After "Run NPM Install" cPanel will also create:
    node_modules/
    package-lock.json

----------------------------------------------------------------
UPLOAD STEPS
----------------------------------------------------------------
  1. cPanel File Manager  ->  open  public_html/akoya/
  2. Click UPLOAD, upload  akoya-properties-deploy.zip
  3. Right-click the .zip file  ->  EXTRACT
     Make sure the "Extract Files" path is:  /public_html/akoya
     (not  /public_html/akoya/akoya-properties-deploy)
  4. Delete the .zip after extraction.
  5. If cPanel created a sample app.js / package.json before, the
     extract will overwrite them - this is what we want.

----------------------------------------------------------------
NODE.JS APP SETTINGS
----------------------------------------------------------------
cPanel  ->  Setup Node.js App  ->  Edit your app:

  Node.js version          :  20.20.2 (or highest available)
  Application mode         :  Production
  Application root         :  akoya
  Application URL          :  akoyarealestatesales.com  (path empty)
  Application startup file :  app.js
  Environment variables    :  NODE_ENV = production   (optional)

Then:
  - Click SAVE
  - Click  RUN NPM INSTALL    (installs Express - REQUIRED)
  - Click  RESTART  (or STOP then START)

----------------------------------------------------------------
VERIFY
----------------------------------------------------------------
Open  https://akoyarealestatesales.com/
You should see the Akoya Properties homepage.

If you still see "It works! NodeJS 20.20.2":
  - Confirm app.js exists inside  public_html/akoya/
  - Confirm Application startup file = app.js
  - Click Run NPM Install again
  - Click Restart

If the homepage loads but going to /gallery or /properties/2 gives
a 404 when refreshed: that means Passenger isn't routing through
app.js. Re-check the startup file setting and Restart.
