import header from './header.htm.js';
import footer from './footer.htm.js';
import logo from '../svg/logo/index.svg.js';

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Symbiote.js</title>
  <meta name="description" content="Symbiote.js - ultralight and ultrapowerful library to create widgets, organise micro-frontends, build reusable embeddable components and libraries.">
  <meta name="keywords" content="Symbiote.js, web-components, javascript framework, javascript library, application state management, custom element, micro frontends, widget development, DOM API, js, js documentation"/>
  <meta property="og:description" content="Symbiote.js - ultralight and ultrapowerful library to create widgets, organise micro-frontends, build reusable embeddable components and libraries.">
  <meta property="og:title" content="Symbiote.js">
  <meta name="twitter:title" content="Symbiote.js">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22.15em%22 y=%22.85em%22 fill=%22%23f0f%22 font-size=%22100%22>ఠ</text></svg>">
  <link rel="stylesheet" href="./css/index.css">
  <script src="./js/index.js" type="module"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-2RZEGMKNNR"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2RZEGMKNNR');
  </script>
</head>
<body>
  <header>${header}</header>
  <main>
    <div>${logo}</div>
    HOMEPAGE
  </main>
  <footer>${footer}</footer>
</body>
</html>
`;