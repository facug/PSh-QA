import {Chainable} from "cypress";
export class ClientSlideElement {
    #imgSelector: string = 'img.logo--image';

    public getClientName(element: JQuery<HTMLElement>): Chainable<string> {
        let imgFilename: string;
        return cy.wrap(element).get(this.#imgSelector).then(($img) => {
            return $img.attr('src');
        });
    }
}
export const clientSlideElement: ClientSlideElement = new ClientSlideElement();
