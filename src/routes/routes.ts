import r = require('express');
import { pdfRoutes } from './pdf/pdf.routes';

const router = r.Router();

router.use('/api/', pdfRoutes);
router.use('/', (_req, res) => {
    res.send('Add a query parameter `url=` with the website link like so <strong>/api?url=<url></strong> to download the PDF');
});

export const routes = router;
