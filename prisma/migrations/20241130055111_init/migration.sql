/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ContactForm` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ContactForm_email_key" ON "ContactForm"("email");
