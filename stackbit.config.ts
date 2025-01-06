import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.5.0',

  // Content sources
  contentSources: [
    {
      name: 'GitHub Repository',
      fetchFrom: {
        provider: 'github',
        owner: 'theamoussa', // GitHub username
        repo: 'amanitateam', // Repository name
        branch: 'main', // Branch to use
      },
    },
  ],

  devCommand: 'npm run dev', // Adjust based on your project
  buildCommand: 'npm run build', // Optional: Specify your build command
  outputDirectory: 'dist', // Optional: Specify your output directory
});
