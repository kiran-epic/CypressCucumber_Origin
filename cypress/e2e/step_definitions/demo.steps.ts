import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DemoPage from '../pages/demo.page';

Given('I visit the page with path {string}', async (path: string) => {
    DemoPage.visit(path);
});