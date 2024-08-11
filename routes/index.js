import { Router } from 'express';

import { footerText, messages } from '../lib/data.js';

const router = new Router();

router.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Home page',
    messages: messages,
    footerText: footerText,
  });
});

export default router;
