export type LookbookProduct = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  badge?: string;
  image: string;
};

export const lookbookProducts: LookbookProduct[] = [
  { id: "01", slug: "kumari", name: "Kumari", subtitle: "Living Goddess", badge: "01", image: "/products/kumari.svg" },
  { id: "02", slug: "bhairab", name: "Bhairab", subtitle: "Fierce Guardian", image: "/products/bhairab.svg" },
  { id: "03", slug: "ashta-matrika", name: "Ashta Matrika", subtitle: "Eight Mother Goddesses", badge: "LIMITED", image: "/products/ashta-matrika.svg" },
  { id: "04", slug: "machindranath", name: "Machindranath", subtitle: "Bringer of Rain", image: "/products/machindranath.svg" },
  { id: "05", slug: "taleju", name: "Taleju", subtitle: "Royal Deity", image: "/products/taleju.svg" },
  { id: "06", slug: "ganesh", name: "Ganesh", subtitle: "Remover of Obstacles", badge: "06", image: "/products/ganesh.svg" },
  { id: "07", slug: "ajima", name: "Ajima", subtitle: "Grandmother Goddess", image: "/products/ajima.svg" },
  { id: "08", slug: "ranjana-lipi", name: "Ranjana Lipi", subtitle: "Sacred Script", badge: "SCRIPT", image: "/products/ranjana-lipi.svg" },
  { id: "09", slug: "garuda", name: "Garuda", subtitle: "Divine Vehicle", image: "/products/garuda.svg" },
  { id: "10", slug: "durbar-square", name: "Durbar Square", subtitle: "Living Heritage", image: "/products/durbar-square.svg" },
  { id: "11", slug: "indra-jatra", name: "Indra Jatra", subtitle: "Festival of the Gods", badge: "NEW", image: "/products/indra-jatra.svg" },
  { id: "12", slug: "naga", name: "Naga", subtitle: "Serpent Guardian", image: "/products/naga.svg" },
];
