"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supabase_1 = require("../supabase");
const router = express_1.default.Router();
// GET all stats
router.get("/", async (req, res) => {
    const { data, error } = await supabase_1.supabase.from("usage_stats").select("*");
    if (error)
        return res.status(500).json({ error: error.message });
    // Optional: if you want the same format as your array
    const formattedData = {
        data: data.map((row) => ({
            windows: row.windows,
            mac: row.mac,
            linux: row.linux,
            month: row.month,
        })),
        series: [
            { name: "windows", color: "teal.solid" },
            { name: "mac", color: "purple.solid" },
            { name: "linux", color: "blue.solid" },
        ],
    };
    res.json(formattedData);
});
exports.default = router;
