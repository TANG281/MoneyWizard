const express = require('express');
const router = express.Router();
const transfersQueries = require('../db/queries/transfers_query.js')

router.post('/transfer/add', (req, res) => {
  const transferData = {
    userId: req.body.userId,
    categoryId: req.body.categoryId,
    accountFrom: req.body.accountFrom,
    accountTo: req.body.accountTo,
    amount: req.body.amount,
    transaction_date: req.body.transaction_date,
    notes: req.body.notes
  }

  transfersQueries.addTransfer(transferData)
  .then(() => {
    res.redirect('/transactions')
  })
  .catch((error) => {
    console.log('Error in adding transfer to DB', error);
    res.status(500).send('Internal Server Error');
  })
})

router.post('/transfer/edit', (req, res) => {
  const transferData = {
    transactionId: req.body.transaction_id,
    userId: req.body.userId,
    categoryId: req.body.categoryId,
    accountFrom: req.body.accountFrom,
    accountTo: req.body.accountTo,
    amount: req.body.amount,
    transaction_date: req.body.transaction_date,
    notes: req.body.notes
  }

  transfersQueries.editTransfer(transferData)
  .then(() => {
    res.redirect('/transactions')
  })
  .catch((error) => {
    console.log('Error in editing transfer in DB', error);
    res.status(500).send('Internal Server Error');
  })
})

module.exports = router;