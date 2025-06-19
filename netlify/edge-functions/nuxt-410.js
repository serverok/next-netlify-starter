export default async (request, context) => {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/_nuxt/')) return;
  
    try {
      const response = await context.next();
      if (response.status === 404) {
        return new Response(null, { status: 410 });
      }
      return response;
    } catch {
      return new Response(null, { status: 410 });
    }
  };