import type { StorybookConfig } from '@storybook/nextjs'
import path from "path";
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@/pages"] = path.resolve(__dirname, "../src/pages");
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../src/components"
    );
    config.resolve.alias["@/api"] = path.resolve(
      __dirname,
      "../src/api"
    );
    config.resolve.alias["@/assets"] = path.resolve(
      __dirname,
      "../src/assets"
    );

    return config;
  },
};
export default config
