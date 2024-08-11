import { Router } from 'express';

import { footerText, messages } from '../lib/data.js';

const router = new Router();

router.get('/', (req, res) => {
  res.render('pages/new-message', {
    title: 'New message',
    footerText: footerText,
  });
});

router.post('/', (req, res) => {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({ user: author, text: message, added: new Date() });
  res.redirect('/');
});

export default router;
