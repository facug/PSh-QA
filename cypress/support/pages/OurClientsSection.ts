/// <reference types="Cypress" />

import cypress from "cypress";
import { Section } from "../basics/Section";

export class OurClientsSection extends Section{
    #clientSectionSelector: string = '.client--section';
    #slideSelector: string = '.slick-slide';


    public scrollToSection(): OurClientsSection{
        this.scrollTo(this.#clientSectionSelector);
        return this;
    }

    public printClients(): void {
        cy
            .get(this.#clientSectionSelector)
            .within(($list) => {
                cy.get(this.#slideSelector)
                .each(function($el, index, $list) {
                    cy.log($el)
                });
            });

    }
}
export const ourClientsSection:OurClientsSection = new OurClientsSection();
