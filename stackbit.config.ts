import { ContentfulContentSource } from '@stackbit/cms-contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN;
const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

// Ensure the environment variables are set
if (!spaceId || !environment || !previewToken || !accessToken) {
  throw new Error('Missing required environment variables for Contentful.');
}

import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.5.0',
  ssgName: 'nextjs',  // Replace with your SSG framework
  nodeVersion: '18',
  devCommand: 'npm run dev',  // Ensure the correct dev command
  buildCommand: 'npm run build',
});
