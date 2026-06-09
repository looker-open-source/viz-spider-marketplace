project_name: "viz-spider-marketplace"

constant: VIS_LABEL {
  value: "Spider"
  export: override_optional
}

constant: VIS_ID {
  value: "spider-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://static-a.cdn.looker.app/marketplace/viz-dist/spider.js"
  label: "@{VIS_LABEL}"
  dependencies: []
}
