/* eslint-disable @typescript-eslint/no-empty-interface */
import * as r from 'express';
import { Response, Request } from 'express';
import { download } from '../../utils/download-pdf';
import { generateValidUrl } from '../../utils/valid-url';

const router = r.Router();

export interface RequestParams {}
export interface ResponseBody {}
export interface RequestBody {}

interface RequestQuery {
    url: string;
}

// Request is a generic type that takes 4 parameters
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express/index.d.ts#L112-L117

router.get('', async (req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>, res: Response) => {
    try {
        const queries = req.query;
        const { url } = queries;

        if (url.length === 0) {
            res.status(400).send('Please provide a URL');
            return;
        }

        const validURL = generateValidUrl(url);
        console.log(validURL);

        const pdf = await download({
            website_url: validURL as string
        });
        res.setHeader('Content-Length', pdf.length);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=webpage.pdf`);
        res.send(pdf);
    } catch (error) {
        res.status(500).send('Something went wrong while downloading the PDF');
    }
});

export const pdfRoutes = router;
