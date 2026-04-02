CREATE TABLE "dashboard_cards" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "dashboard_cards_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"value" varchar(255) NOT NULL,
	"change" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chart_data" (
	"id" integer PRIMARY KEY NOT NULL,
	"month" varchar(255) NOT NULL,
	"windows" integer NOT NULL,
	"mac" integer NOT NULL,
	"linux" integer NOT NULL
);
