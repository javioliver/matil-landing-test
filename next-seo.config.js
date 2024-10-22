const seoConfig = {
    // The default title for your site.
    title: "MATIL",
    // A template for the title, allowing you to add a suffix or prefix.
    titleTemplate: "MATIL",
    // The default title for pages that don't specify their own title.
    defaultTitle: "MATIL",
    // The default description for your site.
    description: "Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa.",
    // Open Graph settings for better social media integration.
    openGraph: {
      // The type of content (e.g., website, article).
      type: 'website',
      // The locale of your content.
      locale: 'es_ES',
      // The canonical URL of your site.
      url: 'https://www.matil.ai/',
      // The name of your site.
      site_name: 'MATIL',
      // The default title for Open Graph.
      title: 'MATIL',
      // The default description for Open Graph.
      description: 'Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa.',
      // Images that will be used when your content is shared.
      images: [
        {
          url: '<https://www.mywebsite.com/og-image.jpg>',
          width: 1200,
          height: 630,
          alt: 'Og Image Alt',
        },
      ],
    },
    // Twitter settings for Twitter cards.
    twitter: {
      // The card type, which determines how your content is displayed.
      cardType: 'summary_large_image',
      // The Twitter handle of your site.
      site: '@matil',
      // The Twitter handle of the content creator.
      creator: '@matil',
      // The default title for Twitter cards.
      title: 'MATIL - Soluciones de IA',
      // The default description for Twitter cards.
      description: 'This is the default description of my website.',
      // The image that will be used in Twitter cards.
      image: 'https://www.matil.ai/og-image.jpg',
    },
    // Additional meta tags to include in the head of your document.
 
  };
  export default seoConfig;