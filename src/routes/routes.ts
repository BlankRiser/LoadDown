import r = require('express');
import { pdfRoutes } from './pdf/pdf.routes';

const router = r.Router();

router.use('/api/', pdfRoutes);
router.use('/', (_req, res) => {
    res.send('Go to /api?downloadPDF=<url> to download the PDF');
});

export const routes = router;
