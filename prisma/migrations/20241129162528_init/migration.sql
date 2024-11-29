/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `createdAt` on the `ContactForm` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
INSERT INTO "new_ContactForm" ("email", "id", "message", "name", "phone") SELECT "email", "id", "message", "name", "phone" FROM "ContactForm";
DROP TABLE "ContactForm";
ALTER TABLE "new_ContactForm" RENAME TO "ContactForm";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
