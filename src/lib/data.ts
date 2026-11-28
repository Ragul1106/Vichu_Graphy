export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  tag?: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "classic-photo-frame",
    name: "Classic Photo Frame",
    category: "Frames",
    price: 399,
    description: "A timeless frame for your favourite memory.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=75",
    ],
    tag: "Popular",
    details: [
      "Multiple size options",
      "Personalized photo print",
      "Gift-ready finishing",
    ],
  },
  {
    slug: "premium-album",
    name: "Premium Photo Album",
    category: "Albums",
    price: 1299,
    description: "Keep your special moments together in a beautiful album.",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
    ],
    tag: "Bestseller",
    details: [
      "Custom cover design",
      "High-quality photo printing",
      "Multiple page options",
    ],
  },
  {
    slug: "custom-mug",
    name: "Personalized Photo Mug",
    category: "Gifts",
    price: 299,
    description: "A thoughtful everyday gift made personal.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    ],
    details: [
      "Custom photo or text",
      "Ceramic mug",
      "Gift packaging available",
    ],
  },
  {
    slug: "collage-frame",
    name: "Photo Collage Frame",
    category: "Frames",
    price: 799,
    description: "Bring several favourite moments together on one wall.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    ],
    details: [
      "Multi-photo layout",
      "Custom arrangement",
      "Wall mounting option",
    ],
  },
  {
    slug: "memory-box",
    name: "Memory Gift Box",
    category: "Gifts",
    price: 999,
    description: "A curated box for birthdays, anniversaries and surprises.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    ],
    tag: "New",
    details: [
      "Personalized message",
      "Custom contents",
      "Occasion-based themes",
    ],
  },
  {
    slug: "wedding-album",
    name: "Wedding Story Album",
    category: "Albums",
    price: 2499,
    description: "A premium album designed around your wedding story.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    ],
    details: [
      "Custom layouts",
      "Premium paper options",
      "Personalized cover",
    ],
  },
];

export const categories = [
  {
    name: "Gifts",
    href: "/collections/gifts",
    countLabel: "9 Collections",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Frames",
    href: "/collections/frames",
    countLabel: "8 Collections",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Events",
    href: "/collections/events",
    countLabel: "8 Services",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Flex Design",
    href: "/collections/flex-design",
    countLabel: "7 Designs",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Invitations",
    href: "/collections/invitations",
    countLabel: "4 Designs",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  },
];


export type CollectionItem = {
  slug: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  items: CollectionItem[];
};

function createItems(names: string[], image: string): CollectionItem[] {
  return names.map((name) => ({
    slug: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    name,
    description: `Explore our ${name.toLowerCase()} collection at VichuGraphy. Contact us for designs, pricing and more details.`,
    image,
  }));
}

export const collections: Collection[] = [
  {
    slug: "gifts",
    title: "Personalised Gifts",
    description: "Make every occasion special with personalised gifts.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85",
    items: createItems(
      [
        "Magic Mirror",
        "Mobile Case",
        "Wallet",
        "Wooden Engraving",
        "Glassy Engraving",
        "MDF Clock",
        "Resin Art",
        "Pillow",
        "MDF Cutout",
      ],
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85"
    ),
  },
  {
    slug: "frames",
    title: "Photo Frames",
    description: "Turn your favourite memories into beautiful artwork.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85",
    items: createItems(
      [
        "Vazhuthumedal",
        "Mosaic Art",
        "Painting Art",
        "Pencil Art",
        "Imaginary Art",
        "Digital Merge Art",
        "Collage Frame",
        "Calendar Frame",
      ],
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85"
    ),
  },
  {
    slug: "events",
    title: "Events & Photography",
    description: "Capture your beautiful moments and special occasions.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    items: createItems(
      [
        "Album Variety",
        "Album Design",
        "Birthday Event",
        "Wedding Event",
        "House Warming Event",
        "Pre Wedding Event",
        "Maternity Shoot",
        "Baby Shower Event",
      ],
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
    ),
  },
  {
    slug: "flex-design",
    title: "Flex Designs",
    description: "Creative flex designs for every occasion and function.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
    items: createItems(
      [
        "Wedding Flex",
        "Kovil Function Flex",
        "Death Flex",
        "Ear Piercing Flex",
        "Birthday Flex",
        "House Warming Flex",
        "Shop Flex",
      ],
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85"
    ),
  },
  {
    slug: "invitations",
    title: "Invitation Designs",
    description: "Invitations for all your memorable celebrations.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    items: createItems(
      [
        "Wedding Invitation",
        "Housewarming Invitation",
        "Ear Piercing Invitation",
        "Birthday Invitation",
      ],
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85"
    ),
  },
];

export const portfolio = [
  {
    title: "Wedding Moments",
    type: "Photography",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Pre-wedding Stories",
    type: "Photography",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Celebration Films",
    type: "Videography",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85",
  },
];
