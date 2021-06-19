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
    domains: ["assets.nflxext.com", "assets.stickpng.com"],
  },
};
// http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png
// https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/3308f02e-ddb9-408a-b572-4926598bc0e7/ZA-en-20210607-popsignuptwoweeks-perspective_alpha_website_medium.jpg
