/// <reference types="Cypress" />

import cypress from "cypress";
import { Section } from "../basics/Section";
import { clientSlideElement } from "./ClientSlideElement";

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
            .within(() => {
                cy.get(this.#slideSelector)
                .each(function($el, index, $list) {
                    cy.wrap($el).within(($el) => {
                        clientSlideElement.getClientName($el).then(($log: string) => {
                            cy.log($log);
                        });
                    });
                }).then(($list)=> {
                    cy.log("Clients amount:", $list.length);
                });
            });

    }
}
export const ourClientsSection:OurClientsSection = new OurClientsSection();
