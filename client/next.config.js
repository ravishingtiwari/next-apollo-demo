module.exports = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          }
        ],
      },
    ]
  },
  future: {
    webpack5: true,
  },
}
