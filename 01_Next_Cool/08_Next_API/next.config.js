module.exports = {
  webpack5: false,
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
