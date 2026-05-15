const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="10" fill="#ffffff" />
  <path d="M12 12h40v40H12V12Z" fill="#f5f6f7" stroke="#191b1f" stroke-width="4" />
  <path d="M20 20h10v24H20V20Z" fill="#9d2436" />
  <path d="M34 20h10v10H34V20Z" fill="#2458a6" />
  <path d="M34 34h10v10H34V34Z" fill="#637b69" />
  <path d="M12 52h40" stroke="#191b1f" stroke-width="5" />
</svg>`;

export const GET = () =>
  new Response(favicon, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
