/// <reference types="Cypress" />
export class Section {

    protected scrollTo(selector: string, duration: number):void {
        cy.get(selector).scrollIntoView({duration: duration});
    }
}
export const section:Section = new Section();
