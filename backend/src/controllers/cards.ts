import type { Request, Response } from "express";
import { asc } from "drizzle-orm";
import { db } from "../index"
import { cards } from "../db/schema";

export const getCards = async (req: Request, res: Response) => {
  try {
    const data = await db
      .select()
      .from(cards)
      .orderBy(asc(cards.id));

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
  } catch (err: any) {
    console.error("Database error:", err.message || err);

    res.status(500).json({
      success: false,
      error: err.message || "Internal server error",
    });
  }
};