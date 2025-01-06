import { ContentfulContentSource } from '@stackbit/cms-contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN;
const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

// Ensure the environment variables are set
if (!spaceId || !environment || !previewToken || !accessToken) {
  throw new Error('Missing required environment variables for Contentful.');
}

export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  contentSources: [
    new ContentfulContentSource({
      spaceId: spaceId,  // Now guaranteed to be a string
      environment: environment,  // Now guaranteed to be a string
      previewToken: previewToken,  // Now guaranteed to be a string
      accessToken: accessToken,  // Now guaranteed to be a string
    }),
  ],
  models: {
    page: { type: 'page', urlPath: '/{slug}' },
  },
}
