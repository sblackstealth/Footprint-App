# Footprint-App

[![DeepScan grade](https://deepscan.io/api/teams/6048/projects/7909/branches/87893/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6048&pid=7909&bid=87893)

## Install & Quick Start

### React
1. `npm install`
2. `npm start`

### Grafana

For the data visualizations to work, you must:
1. [Install a local instance](https://grafana.com/docs/installation/mac/) of the analytics server. (Note you may need to [fix `brew`](https://github.com/sblackstealth/Footprint-App/issues/27#issuecomment-553093930) first.)
2. Run Grafana locally with:
    ```
    brew services start grafana
    ```
## Continuous integration

DeepScan will analyze your pull requests for code quality and ESLint warnings.

To save a CI run, you can run the linter locally with:
```
npm run lint
```
