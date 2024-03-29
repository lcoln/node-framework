<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title>web-component</title>
    <meta name="description" content="web-component description">
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js"></script> -->

    <link rel="stylesheet" href="/css/air/index.css">
    <link rel="stylesheet" href="/css/air/reset.css">
  </head>
  <body>
    <!-- <sheel-wc></sheel-wc> -->
    <!-- <page-wc skin="2" id="page" callback="{{script}}"></page-wc> -->
    <div id="app" v-cloak>
      <section class="mod-nav-top">
        <div class="logo">
          <span>Air-UI</span>
          <span>v0.0.1</span>
        </div>
        <div class="nav">
          <input type="text" placeholder="search" class="nav-margin nav-search">
          <icon-wc type="github" class="nav-margin air-ui-inline"></icon-wc>
        </div>
      </section>
      <section class="mod-nav-left">
        <tree-wc :data="JSON.stringify(tree)" @tree_wc_select="select"></tree-wc>
      </section>
      <section class="mod-content">{{msg}}</section>
    </div>

    <script type="module" src="/js/air/index.js" crossorigin></script>
    <script src="/js/libs/vue.js"></script>
  </body>
</html>
