import { Section } from "../../basics/Section";

export class SocialLinksSection extends Section {
    #socialLinkSectionSelector: string = 'ul.copy--container';
    #linkSelector: string = 'li a';

    public scrollToSection(duration: number): SocialLinksSection {
        this.scrollTo(this.#socialLinkSectionSelector, duration);
        return this;
    }

    public printSocialLinks():void {
        cy
            .get(this.#socialLinkSectionSelector)
            .within(() => {
                cy.get(this.#linkSelector)
                .each(function($el, index, $list) {
                    cy.log($el.attr('href'))
                })
            });

    }
}
export const socialLinksSection: SocialLinksSection = new SocialLinksSection();