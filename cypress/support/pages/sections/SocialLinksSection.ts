import { Section } from "../../basics/Section";
import { stringParserHelper } from "../../helper/StringParserHelper";

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
                    cy.log("title: ", stringParserHelper.getTitleFromLink($el.attr('href')));
                    cy.log("url: ", $el.attr('href'));
                })
            });

    }
}
export const socialLinksSection: SocialLinksSection = new SocialLinksSection();
