import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};
const server = createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405);
    response.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let filename = path.resolve(root, `.${pathname}`);
    if (filename !== root && !filename.startsWith(root + path.sep)) {
      response.writeHead(403);
      response.end();
      return;
    }
    let info = await stat(filename);
    if (info.isDirectory()) {
      filename = path.join(filename, "index.html");
      info = await stat(filename);
    }
    response.writeHead(200, {
      "Content-Type":
        types[path.extname(filename)] || "application/octet-stream",
      "Content-Length": info.size,
      "X-Content-Type-Options": "nosniff",
    });
    if (request.method === "HEAD") response.end();
    else createReadStream(filename).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Portfolio preview: http://127.0.0.1:${port}`),
);
