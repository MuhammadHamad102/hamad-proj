"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const supabase_1 = require("../supabase");
const getStats = async (req, res) => {
    try {
        const { data, error } = await supabase_1.supabase.from("chart_data").select("*");
        if (error) {
            console.error("Database error:", error.message);
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }
        if (!data || data.length === 0) {
            console.log("No data found");
            return res.status(404).json({
                success: false,
                message: "No data is here",
                data: [],
                series: []
            });
        }
        const formattedData = {
            success: true,
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
        console.log(`Fetched ${data.length} records`);
        res.json(formattedData);
    }
    catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
};
exports.getStats = getStats;
