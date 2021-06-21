module.exports = {
  webpack5: false,
  webpack: (config) => {
    config.node = {
      dns: "mock",
      fs: "empty",
      path: true,
      url: false,
    };
    return config;
  },
  images: {
    domains: [
      "pbs.twimg.com",
      "assets.nflxext.com",
      "assets.stickpng.com",
      "mir-s3-cdn-cf.behance.net",
      "occ-0-2794-2219.1.nflxso.net",
    ],
  },
};
