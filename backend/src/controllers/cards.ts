import type { Request, Response } from "express";
import { supabase } from "../supabase";

export const getCards = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("dashboard_cards")
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
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};