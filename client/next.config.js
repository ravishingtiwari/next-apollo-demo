module.exports = {
  env: {
    contactServerUrl: 'https://contact-server-rt.herokuapp.com/graphql',
  },
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
