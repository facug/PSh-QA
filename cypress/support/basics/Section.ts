/// <reference types="Cypress" />
export class Section {

    private scrollTo(selector: string):void {
        cy.get(selector).scrollIntoView({duration: 4000});
    }
}
export const section:Section = new Section();
