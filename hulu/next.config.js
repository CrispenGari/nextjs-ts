module.exports = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  images: {
    domains: ["image.tmdb.org", "hulu-matchmaker.s3.us-west-2.amazonaws.com"],
  },
  publicRuntimeConfig: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
};
