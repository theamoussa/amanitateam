import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.5.0',

  contentSources: [
    {
      repoUrl: 'https://github.com/theamoussa/amanitateam',
      branch: 'main',
    },
  ],

  devCommand: 'npm run dev',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
});