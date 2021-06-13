module.exports = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  images: {
    domains: ["png.pngitem.com"],
  },
};
