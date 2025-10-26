export async function GET() {
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#1e293b"/>
      <text x="600" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">
        Nila
      </text>
      <text x="600" y="360" font-family="Arial, sans-serif" font-size="32" fill="#94a3b8" text-anchor="middle">
        Independent AI Consulting
      </text>
      <text x="600" y="420" font-family="Arial, sans-serif" font-size="24" fill="#64748b" text-anchor="middle">
        Shipping production AI systems
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
