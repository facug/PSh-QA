/// <reference types="Cypress" />

import { ourClientsSection } from "../support/pages/sections/OurClientsSection";
import { socialLinksSection, SocialLinksSection } from "../support/pages/sections/SocialLinksSection";


describe("it will do an exam", function() {
    it("Access Our Client list and prints all clients and how many they are", function() {
        cy.visit('/');
        ourClientsSection
            .scrollToSection(4000)
            .printClients();
        //cy.visit('/en/');
        socialLinksSection
            
            .printSocialLinks();

        cy.screenshot({capture:'viewport'});
    });
    /**
     * 
     * 
     * it("Navigate to blog and prints first tweet found", function() {
        

    });
    it("Prints all social media urls in footer section", function() {

    });
    it("Takes screenshot from the homepage", function() {

    });
    */
});
