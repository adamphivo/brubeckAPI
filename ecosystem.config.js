module.exports = {
  apps: [
    {
      name: "brubeckscan/server",
      script: "packages/server/dist/index.js",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "brubeckscan/client",
      script: "packages/client/server/index.js",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
