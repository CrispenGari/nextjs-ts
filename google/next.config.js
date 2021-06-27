module.exports = {
  webpack5: false,
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  images: {
    domains: ["assets.stickpng.com", "lh3.googleusercontent.com"],
  },
};
