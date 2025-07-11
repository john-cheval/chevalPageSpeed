import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ServerNavbar from "@/components/NewHeader/ServerNavbar";
import ServerFooter from "@/components/Footer/ServerFooter";
// import { Partytown } from "@builder.io/partytown/react";
import ScrollToTop from "@/hooks/useScrollToTop";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="notranslate"
      translate="no"
    >
      <head>
        {/* <Partytown
          debug={process.env.NODE_ENV === "development"}
          forward={["dataLayer.push"]}
        /> */}
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chevalme" />
        <meta
          name="google-site-verification"
          content="YbB6z89M0yPuoamiqG8bPFz3wMP1p5QRhXO8ni6oxXk"
        />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://snap.licdn.com" />
        <link
          rel="preconnect"
          href="https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net"
        />

        <link
          rel="preconnect"
          href="https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net/wp-content/uploads/2025/02/short.mp4"
        />
        <link
          rel="dns-prefetch"
          href="https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net/wp-content/uploads/2025/02/short.mp4"
        />
        <link
          rel="preload"
          href="/Cheval.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* <Script id="disable-right-click" strategy="beforeInteractive">
          {`
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });
          `}
        </Script> */}

        {/* <Script id="security-scripts" strategy="afterInteractive">
          {`
            // Right click prevention
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });
            
            // Copy/paste prevention
            document.addEventListener('cut', function(e) {
              e.preventDefault();
            });
            document.addEventListener('copy', function(e) {
              e.preventDefault();
            });
            document.addEventListener('paste', function(e) {
              e.preventDefault();
            });
            
            // Input validations
            document.addEventListener('DOMContentLoaded', function() {
              // Phone number masking
              const phoneInputs = document.querySelectorAll('.phone_number_mask');
              phoneInputs.forEach(input => {
                input.addEventListener('input', function(e) {
                  // Implement your masking logic here
                  this.value = this.value.replace(/[^0-9-]/g, '');
                });
              });
              
              // String-only validation
              const stringInputs = document.querySelectorAll('.only-string-values');
              stringInputs.forEach(input => {
                input.addEventListener('keypress', function(e) {
                  const keyCode = e.which;
                  if (!((keyCode >= 65 && keyCode <= 90) || 
                      (keyCode >= 97 && keyCode <= 122)) && 
                      (keyCode != 8 && keyCode != 32) || 
                      (keyCode >= 48 && keyCode <= 57)) {
                    e.preventDefault();
                  }
                });
              });
              
              // Number validation
              const numberInputs = document.querySelectorAll('.number-key-validation');
              numberInputs.forEach(input => {
                input.addEventListener('keypress', function(e) {
                  const charCode = e.which;
                  if ((charCode >= 32) && ((charCode < 48) || (charCode > 57))) {
                    e.preventDefault();
                  }
                });
              });
              
              // Space prevention
              const noSpaceInputs = document.querySelectorAll('.space_not_allow');
              noSpaceInputs.forEach(input => {
                input.addEventListener('keypress', function(e) {
                  if (e.which == 32) {
                    e.preventDefault();
                  }
                });
              });
            });
          `}
        </Script> */}

        {/* <Script
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
          strategy="afterInteractive"
          onLoad={() => {
            new DisableDevtool({
              md5: "xxx",
              url: "xxx",
              tkName: "xxx",
              interval: "xxx",
              disableMenu: true,
              detectors: "xxx",
              clearLog: true,
              disableSelect: true,
              disableCopy: true,
              disableCut: true,
              disablePaste: true,
            });
          }}
        ></Script> */}
      </head>
      <body
        className={`${sora.variable} flex flex-col min-h-screen antialiased`}
      >
        <ServerNavbar />

        <main className="flex-grow-1">
          {" "}
          <ScrollToTop />
          {children}
        </main>

        <ServerFooter />

        {/* Google Tag Manager (noscript) - single implementation */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMNRTFC2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* LinkedIn Insight Tag (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6408778&fmt=gif"
          />
        </noscript>

        {/* Consolidated Analytics Scripts - afterInteractive ensures they don't block rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E4N6B3LXG2"
          // strategy="afterInteractive"
          strategy="lazyOnload"
        />

        {/* Consolidated Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11182646972');
            gtag('config', 'AW-11319129226');
            gtag('config', 'G-E4N6B3LXG2');
          `}
        </Script>

        {/* <Script id="optimized-google-analytics" strategy="lazyOnload" partytown>
          {`
            function loadAnalytics() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11182646972');
              gtag('config', 'AW-11319129226');
              gtag('config', 'G-E4N6B3LXG2');
            }
            
            // Load on interaction or after delay
            ['click', 'scroll', 'keydown'].forEach(event => {
              window.addEventListener(event, loadAnalytics, { once: true });
            });
            
            setTimeout(loadAnalytics, 3000);
          `}
        </Script> */}

        {/* Single Google Tag Manager implementation */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.defer=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMNRTFC2');
          `}
        </Script>
        {/* <Script id="optimized-gtm" strategy="lazyOnload" partytown>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.defer=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMNRTFC2');
          `}
        </Script> */}

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "6408778";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);

            (function(l) {
              if (!l){
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>

        {/* <Script id="optimized-linkedin" strategy="lazyOnload" partytown>
          {`
            function loadLinkedIn() {
              _linkedin_partner_id = "6408778";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              
              (function(l) {
                if (!l){
                  window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[];
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            }
            
            // Load on interaction or after delay
            ['mousemove', 'scroll', 'touchstart'].forEach(event => {
              window.addEventListener(event, loadLinkedIn, { once: true, passive: true });
            });
            
            setTimeout(loadLinkedIn, 4000);
          `}
        </Script> */}

        {/* Form tracking */}
        <Script id="form-tracking" strategy="afterInteractive">
          {`
            document.addEventListener("wpcf7mailsent", function(event) {
              window.location = "https://chevalme.com/thank-you/";
              window.dataLayer.push({
                event: "send_form",
                formId: event.detail.contactFormId,
                response: event.detail.inputs,
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
