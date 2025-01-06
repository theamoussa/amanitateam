import stackbitConfig from './stackbit.config.js';  // Adjust the import path if necessary
import { stackbitConfigToDocumentTypes } from '@contentlayer/experimental-source-files-stackbit';
import { makeSource } from 'contentlayer/source-files';

// Convert Stackbit config to document types
const documentTypes = stackbitConfigToDocumentTypes(stackbitConfig, {
  documentTypes: {
    Page: {
      // Optionally extend Page properties here if needed
    },
  },
});

// Export the content source setup
export default makeSource({
  contentDirPath: 'content',  // Specify your content directory path
  documentTypes,  // Pass document types
});
