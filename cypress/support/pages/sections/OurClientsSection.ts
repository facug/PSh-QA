/// <reference types="Cypress" />

import cypress from "cypress";
import { Section } from "../../basics/Section";
import { clientSlideElement } from "../elements/ClientSlideElement";
import { stringParserHelper } from "../../helper/StringParserHelper";

export class OurClientsSection extends Section{
    #clientSectionSelector: string = '.client--section';
    #slideSelector: string = '.slick-slide';
    #imgSelector: string = 'img.logo--image';


    public scrollToSection(duration: number): OurClientsSection{
        this.scrollTo(this.#clientSectionSelector, duration);
        return this;
    }

    public printClients(): void {
        cy
            .get(this.#clientSectionSelector)
            .within(() => {
                cy.get(this.#imgSelector)
                .each(function($el, index, $list) {
                    cy.wrap($el).within(($el) => {
                        //cy.log("Clients name:", $el.attr('src'));
                        cy.log("Clients name:", stringParserHelper.getClientNameFromSrc($el.attr('src')))
                        //clientSlideElement.getClientName($el).then(($log: string) => {
                        //    cy.log("Client Name: ", $log);
                        //});
                    });
                }).then(($list)=> {
                    cy.log("Clients amount:", $list.length);
                });
            });
    }
}
export const ourClientsSection:OurClientsSection = new OurClientsSection();
