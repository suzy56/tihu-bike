const server = Bun.serve({
  port: 3456,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    if (path === '/' || path === '') path = '/index.html';
    const file = Bun.file('./dist' + path);
    return new Response(file);
  }
});
console.log(`Pelican server ready at http://localhost:${server.port}`);
