import {Chainable} from "cypress";
export class ClientSlideElement {
    #imgSelector: string = 'img.logo--image';

    public getClientName(element: JQuery<HTMLElement>): Chainable<string> {
        let imgFilename: string;
        return cy.wrap(element).get(this.#imgSelector).then(($img) => {
            return this.processSrcString($img.attr('src'));
        });
    }

    private processSrcString(input: string):string {
        return input.replace('/static/images/rebrand/clients/client_logo_', '').replace('.svg', '')
    }
}
export const clientSlideElement: ClientSlideElement = new ClientSlideElement();
