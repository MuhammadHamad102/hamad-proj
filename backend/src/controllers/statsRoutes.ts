import type { Request, Response } from "express";
import { db } from "../index";
import { charts } from "../db/schema";

export const getStats = async (req: Request, res: Response) => {
  try {
    const data = await db.select().from(charts);

    if (!data || data.length === 0) {
      console.log("No data found");
      return res.status(404).json({
        success: false,
        message: "No data is here",
        data: [],
        series: [],
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

  } catch (err: any) {
    console.error("Database error:", err.message || err);
    res.status(500).json({
      success: false,
      error: err.message || "Internal server error",
    });
  }
};