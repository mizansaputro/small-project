import InvoiceResponse from "@datastore/json/invoice.json";

export default function handler(_req, res) {
    res.status(200).json(InvoiceResponse);
}
