import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        'file:preprocessor',
        browserify(config, {
            typescript: require.resolve('typescript'),
        })
    );

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

export default defineConfig({
    env: {
        TAGS: '@smoke'
    },
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents,
        baseUrl: 'https://google.com',
        specPattern: 'cypress/e2e/**/*.{feature,features}',
        excludeSpecPattern: '**/debug.feature',
        experimentalSessionAndOrigin: true,
    },
});
