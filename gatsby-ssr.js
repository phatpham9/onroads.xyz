const React = require('react')

exports.onPreRenderHTML = function ({
  getHeadComponents, replaceHeadComponents,
  getPreBodyComponents, replacePreBodyComponents,
}) {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    [
      {
        name: 'theme-color',
        content: '#191f2c',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ].map(meta => React.createElement('meta', meta)),
    [
      {
        href: '/splashscreens/iphone5_splash.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/iphone6_splash.png',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/iphoneplus_splash.png',
        media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/iphonex_splash.png',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/iphonexr_splash.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/iphonexsmax_splash.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/ipad_splash.png',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/ipadpro1_splash.png',
        media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/ipadpro3_splash.png',
        media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
      {
        href: '/splashscreens/ipadpro2_splash.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
      },
    ].map(link => React.createElement('link', link)),
  ]);

  const preBodyComponents = getPreBodyComponents();
  replacePreBodyComponents([
    React.createElement('script', {
      key: 'prefers-color-scheme',
      dangerouslySetInnerHTML: {
        __html: `
(function() {
  function setMode(mode) {
    try {
      localStorage.setItem('theme-ui-color-mode', mode)
    } catch (e) {}
  }
  try {
    if (localStorage.getItem('theme-ui-color-mode')) return
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkQuery.addListener(function(e) {
      setMode(e.matches ? 'dark' : 'light')
    })
    setMode(darkQuery.matches ? 'dark' : 'light')
  } catch (e) {}
})()`,
      },
    }),
    ...preBodyComponents,
  ]);
};
