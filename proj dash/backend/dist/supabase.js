"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
exports.supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL = "https://cmtlxttsnrldheohmlyn.supabase.co", process.env.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdGx4dHRzbnJsZGhlb2htbHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4OTQwMDYsImV4cCI6MjA5MDQ3MDAwNn0.nr7NCcoAw5hSWB3_HJTxHLOmuHHQBB-xkoed8r4A3eE ");
