export default function manifest() {
    return {
      name: 'Radii Lab | Quantitative Research Holding Firm with actionable insights',
      short_name: 'Radii Lab | Quantitative Research Holding Firm ',
      description: 'Semi Automated Quantitative Research for the Digital Age',
      theme_color: '#fff',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
            {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
            {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }