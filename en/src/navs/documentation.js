import { createPageList } from '@/utils/createPageList'


const pages = createPageList(
  require.context(`../pages/docs?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [
    {
      title: 'Installation and start',
      href: '/docs/installation',
      match: /^\/docs\/(installation|guides)/,
    },
    pages['about'],
    pages['compare-to-alter'],
  ],
  Tutorials: [
    pages['tutorial-intro'],
    pages['tutorial-login'],
    pages['tutorial-home'],
    pages['tutorial-dashboard'],
    pages['tutorial-datasource'],
    pages['tutorial-time-refresh'],
    pages['tutorial-search'],
    pages['tutorial-sidebar'],
    pages['tutorial-variables'],
    pages['tutorial-global-var'],
    pages['tutorial-admin'],
    pages['tutorial-team'],
    pages['tutorial-alert'],
    pages['tutorial-share'],
  ],
  Administration: [
    pages['admin-mysql-sqlite'],
    pages['admin-role'],
    pages['admin-sidebar-nav'],
    pages['admin-audit-log'],
    // pages['admin-configuration']
  ],
  
  Dashboard: [
    pages['dashboard-setting'],
    pages['dashboard-styles'],
    pages['dashboard-import'],
    pages["dashboard-sort"]
  ],
  Panel: [
    pages["panel-annotation"],
    pages["panel-conditional-rendering"],
    pages["panel-data-transform"],
    pages["panel-styles"],
    pages["panel-overrides"],
    pages["panel-thresholds"],
    pages["panel-interactivity"]
  ],
  Variable: [
    pages["variable-query"],
    pages["variable-jaeger"],
    pages["variable-loki"],
    pages["variable-http"],
  ],  
  Alert: [
    pages["alert"],
    pages["alert-correlate"],
  ],
  'Panel Plugins': [
    pages["plugin-overview"],
    pages["plugin-graph"],
    pages["plugin-table"],
    pages["plugin-nodegraph"],
    pages["plugin-trace"],
    pages["plugin-geomap"],
    pages["plugin-log"],
    pages["plugin-echarts"],
    pages["plugin-stat"],
    pages["plugin-gauge"],
    pages["plugin-bar"],
    // pages["plugin-bargauge"],
    pages["plugin-pie"],
  ],
  'External Plugins': [
    pages["external-panel-install"],
    pages["external-datasource-install"],
    pages["external-plugin-remove"],
 ]
  // Accessibility: [pages['screen-readers']],
  // 'Official Plugins': [
  //   pages['typography-plugin'],
  //   {
  //     title: 'Forms',
  //     href: 'https://github.com/tailwindlabs/tailwindcss-forms',
  //   },
  //   {
  //     title: 'Aspect Ratio',
  //     href: 'https://github.com/tailwindlabs/tailwindcss-aspect-ratio',
  //   },
  //   {
  //     title: 'Container Queries',
  //     href: 'https://github.com/tailwindlabs/tailwindcss-container-queries',
  //   },
  // ],
}
