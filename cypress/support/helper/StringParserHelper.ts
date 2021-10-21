
export class StrinParserHelper {

    public getClientNameFromSrc(input: string): string {
        return input.replace('/static/images/rebrand/clients/client_logo_', '').replace('.svg', '');
    }

    public getTitleFromLink(url: string): string {
        const { hostname } = new URL(url);
        return hostname.replace('www.', '').replace('.com', '').replace('.net', '');
    }
}
export const stringParserHelper: StrinParserHelper = new StrinParserHelper();
