import { z } from "zod";

export const CompletionRequestBody = z.object({ layers: z.array(z.string()) });
