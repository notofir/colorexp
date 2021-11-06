module.exports = {
  //presets: ["@vue/cli-plugin-babel/preset"],
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
