import { isInteger } from "lodash-es";
import { z } from "zod";

const optionalString = z.string().optional().nullable();

const strToInt = (
  defaultValue: number,
  option?: {
    min?: number;
    max?: number;
  }
) => {
  const min = option?.min ?? 1;
  const max = option?.max ?? Number.MAX_SAFE_INTEGER;
  return optionalString
    .transform((v) => {
      const num = Number(v);
      if (isNaN(num) || !isInteger(num) || num < min || num > max) return;
      return num;
    })
    .pipe(z.number().int().min(min).max(max).default(defaultValue));
};

export const paginationSchema = z.object({
  pageIndex: strToInt(1),
  pageSize: strToInt(10),
});
