import { Client as WorkflowClient } from "@upstash/workflow";

import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient =
  QSTASH_TOKEN && QSTASH_URL
    ? new WorkflowClient({
        baseUrl: QSTASH_URL,
        token: QSTASH_TOKEN,
      })
    : {
        trigger: async () => ({
          workflowRunId: null,
          skipped: true,
        }),
      };
