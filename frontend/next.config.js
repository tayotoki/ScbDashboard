/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    const svgLoader = config.module.rules.find((rule) => rule?.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...svgLoader,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'convertColors',
                    params: {
                      currentColor: true,
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    svgLoader.exclude = /\.svg$/i;

    return config;
  },
};
