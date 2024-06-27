import { rateLimiter } from "hono-rate-limiter";

export const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, 
  limit: 100, 
  standardHeaders: "draft-6", 
  keyGenerator: (c) => "<unique_key>", 
  
});