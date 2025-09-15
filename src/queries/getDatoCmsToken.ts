// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {

    case 'raghav-yogi-portfolio.vercel.app':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';


    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
