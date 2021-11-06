module.exports = {
  //presets: ["@vue/cli-plugin-babel/preset"],
  //assumptions: {
  //  "setSpreadProperties": true
  //},
  //plugins: [
  //  ["@babel/plugin-proposal-object-rest-spread", { "useBuiltIns": true }]
  //],
  //presets: ["@babel/preset-env"],
    presets: [
    [
      "@babel/env",
      {
        "targets": {
          "chrome": "60"
        }
      }
    ]
  ]

};
