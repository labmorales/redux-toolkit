import { ConfigFile } from 'src/types';

const config: ConfigFile = {
  schemaFile: './petstore.json',
  apiFile: './emptyApi.ts',
  apiImport: 'appConfigApi',
  outputFile: './generated.ts',
  exportName: 'appConfigApi',
  hooks: true,
};

export default config;
