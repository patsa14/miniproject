/*
  Warnings:

  - You are about to drop the column `phone` on the `ContactForm` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ContactForm" ("email", "id", "message", "name") SELECT "email", "id", "message", "name" FROM "ContactForm";
DROP TABLE "ContactForm";
ALTER TABLE "new_ContactForm" RENAME TO "ContactForm";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
