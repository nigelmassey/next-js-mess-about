<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Build Verification

After making any changes to the Next.js application, you must verify the build works by running:

```bash
docker compose build
```

This ensures changes are compatible with the Docker configuration before committing.
<!-- END:nextjs-agent-rules -->
