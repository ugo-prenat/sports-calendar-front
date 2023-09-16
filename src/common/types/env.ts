import { z } from 'zod';

const envVariablesSchema = z.object({
  NODE_ENV: z.string().default('development')
});

envVariablesSchema.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariablesSchema> {}
  }
}
