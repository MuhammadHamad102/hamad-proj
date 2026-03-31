"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCards = void 0;
const supabase_1 = require("../supabase");
const getCards = async (req, res) => {
    try {
        const { data, error } = await supabase_1.supabase
            .from("public.dashboard_cards")
            .select("*")
            .order("id", { ascending: true });
        if (error) {
            console.error("Database error:", error.message);
            return res.status(500).json({
                success: false,
                error: error.message,
            });
        }
        if (!data || data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No data is here",
                cards: [],
            });
        }
        res.json({
            success: true,
            cards: data,
        });
    }
    catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};
exports.getCards = getCards;
