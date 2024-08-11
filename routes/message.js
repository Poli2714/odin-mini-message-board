import { Router } from 'express';

import { footerText, messages } from '../lib/data.js';

const router = new Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.render('../views/pages/message', {
    footerText: footerText,
    message: messages[id - 1],
    title: 'Message',
  });
});

export default router;
