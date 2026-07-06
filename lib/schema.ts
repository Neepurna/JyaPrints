import { z } from "zod";

export const preorderSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  favoriteDesign: z.string().optional(),
});

export type PreorderData = z.infer<typeof preorderSchema>;

export async function submitPreorder(data: PreorderData) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  console.info("Pre-order captured", data);
  return { ok: true };
}
