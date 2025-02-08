// request-service/controllers/requestController.js
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

exports.createRequest = async (req, res) => {
    const { user_id, items, deadline } = req.body;
    const result = await pool.query('INSERT INTO request (user_id, deadline) VALUES ($1, $2) RETURNING id', [user_id, deadline]);
    const requestId = result.rows[0].id;
    for (const item of items) {
        await pool.query('INSERT INTO request_item (request_id, product_id, quantity) VALUES ($1, $2, $3)', [requestId, item.product_id, item.quantity]);
    }
    res.status(201).json({ message: 'Request created', requestId });
};
