export const site = {
  name: 'AelfaCred',
  origin: (process.env.SITE_URL || 'https://aelfacred.com').replace(/\/$/, ''),
  email: 'sales@qwayhealthcare.ai',
  phone: '+1 (609) 905-7929',
  phoneLink: '+16099057929',
  date: '2026-10-13',
  // Official store listings for the AelfaCred mobile app (override with env vars if needed).
  appStoreUrl: process.env.APP_STORE_URL || 'https://apps.apple.com/us/search?term=AelfaCred',
  googlePlayUrl: process.env.GOOGLE_PLAY_URL || 'https://play.google.com/store/search?q=AelfaCred&c=apps',
  author: 'AelfaCred Editorial Team',
  navigation: [
    ['Platform', '/platform/'], ['Services', '/services/'], ['Who We Serve', '/who-we-serve/'],
    ['Resources', '/resources/'], ['About Us', '/about/'], ['Why AelfaCred', '/why-aelfacred/']
  ]
};

export const sources = {
  cms: ['CMS: Medicare provider enrollment', 'https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers/chain-ownership-system-pecos'],
  revalidation: ['CMS: Revalidations and due dates', 'https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers/revalidations'],
  caqh: ['DataSpring / CAQH: Information for clinicians and office staff', 'https://www.dataspring.com/clinicians'],
  qway: ['QWay Healthcare: About the organization', 'https://qwayhealthcare.ai/about-us/'],
  qwayCredentialing: ['QWay Healthcare: Provider credentialing services', 'https://qwayhealthcare.ai/services/provider-credentialing-services/']
};
