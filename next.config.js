module.exports = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
}