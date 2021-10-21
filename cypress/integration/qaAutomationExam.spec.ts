/// <reference types="Cypress" />

import { ourClientsSection } from "../support/pages/sections/OurClientsSection";
import { socialLinksSection, SocialLinksSection } from "../support/pages/sections/SocialLinksSection";


describe("it will do the PSh exam", function() {
    it("Access Our Client list and prints all clients and how many they are", function() {
        cy.visit('/');
        ourClientsSection
            .scrollToSection(4000)
            .printClients();
        socialLinksSection
            .scrollToSection(4000)
            .printSocialLinks();
        cy.screenshot({capture:'viewport'});
    });
    /**
     * Ideally, i'd separate each test in each "it" segment, but reloading the page will make it sometimes fail due to issues with loading the page ;_;
     * 
     * it("Navigate to blog and prints first tweet found", function() {
        cy.visit('/blog');

    });
    it("Prints all social media urls in footer section", function() {
        cy.visit('/en/');
        socialLinksSection
            .scrollToSection(8000)
            .printSocialLinks();
    });
    it("Takes screenshot from the homepage", function() {
        cy.visit('/en/');
        cy.screenshot({capture:'viewport'});
    });
    */
});
