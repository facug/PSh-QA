/// <reference types="Cypress" />

import { Section } from "../basics/Section";

export class OurClientsSection extends Section{
    #clientSection: string = '.client--section';

    public scrollToSection(): OurClientsSection{
        this.scrollTo(this.#clientSection);
        return this;
    }
}
export const ourClientsSection:OurClientsSection = new OurClientsSection();
