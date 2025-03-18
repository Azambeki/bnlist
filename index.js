const express = require('express');
const axios = require('axios');
const app = express();

const BINANCE_API_URL = "https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query";

app.get('/proxy/binance', async (req, res) => {
    try {
        const response = await axios.get(BINANCE_API_URL, { params: { catalogId: "48" } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
