import { MenuItem, Testimonial, GalleryItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Truffle Malai Paneer Tikka',
    description: 'Cottage cheese marinated in cashew cream, white pepper, and infused with Italian black truffle oil, charred in tandoor.',
    price: 18.50,
    category: 'starters',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 1
  },
  {
    id: 's2',
    name: 'Royal Galouti Kebab',
    description: 'Melt-in-mouth lamb kebabs infused with 24 exotic spices, served on saffron-infused Ulte Tawe ka Paratha.',
    price: 21.00,
    category: 'starters',
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1599487484170-7c1e66508dbc?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2
  },
  {
    id: 's3',
    name: 'Crispy Lotus Stem Honey Chili',
    description: 'Wok-tossed lotus stem slices glazed with wild honey, toasted sesame, scallions, and crushed Sichuan peppers.',
    price: 16.00,
    category: 'starters',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2
  },
  {
    id: 's4',
    name: 'Amritsari Tandoori Prawns',
    description: 'Jumbo tiger prawns marinated in carom seeds, Kashmiri chili, and lemon juice, grilled over glowing embers.',
    price: 24.50,
    category: 'starters',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2
  },

  // Main Course
  {
    id: 'm1',
    name: 'Signature Dal Makhani',
    description: 'Whole black lentils simmered overnight over slow charcoal embers for 36 hours, enriched with butter and double cream.',
    price: 22.00,
    category: 'main',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 1
  },
  {
    id: 'm2',
    name: 'Old Delhi Butter Chicken',
    description: 'Tender tandoori chicken tikka folded in a velvety tomato-fenugreek gravy finished with organic honey and fresh cream.',
    price: 26.50,
    category: 'main',
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 1
  },
  {
    id: 'm3',
    name: 'Kashmiri Rogan Josh',
    description: 'Tender cuts of spring lamb braised in a rich gravy flavored with aromatic fennel, ginger, and Kashmiri red chilies.',
    price: 29.00,
    category: 'main',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2
  },
  {
    id: 'm4',
    name: 'Paneer Lababdar',
    description: 'Cottage cheese cubes cooked in a rich onion-tomato gravy with bell peppers, crushed cashews, and kasuri methi.',
    price: 23.00,
    category: 'main',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 1
  },

  // Biryani
  {
    id: 'b1',
    name: 'Awadhi Dum Lamb Biryani',
    description: 'Long-grain basmati rice and succulent lamb layered and sealed in a handis with aged saffron, mint, and kewra water.',
    price: 32.00,
    category: 'biryani',
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2
  },
  {
    id: 'b2',
    name: 'Hyderabadi Murgh Biryani',
    description: 'Tender chicken marinated in yogurt and spices, slow-cooked in sealed copper pots with aromatic aged basmati rice.',
    price: 27.50,
    category: 'biryani',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2
  },
  {
    id: 'b3',
    name: 'Shahi Truffle Vegetable Biryani',
    description: 'Assorted seasonal vegetables and baby potatoes cooked with fragrant basmati rice, saffron, and white truffle essence.',
    price: 24.00,
    category: 'biryani',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 1
  },

  // Desserts
  {
    id: 'd1',
    name: 'Saffron Rabri Panna Cotta',
    description: 'Italian cream dessert infused with reduced condensed milk, cardamom, and garnished with edible gold leaf and pistachios.',
    price: 14.00,
    category: 'desserts',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd2',
    name: 'Gulab Jamun Cheesecake',
    description: 'Fusion baked cheesecake resting on a buttery cardamom biscuit crust, topped with warm syrup-soaked gulab jamun.',
    price: 15.50,
    category: 'desserts',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd3',
    name: 'Royal Shahi Tukda',
    description: 'Fried ghee-soaked brioche bread topped with thick sweet saffron rabri, almonds, silver foil, and dried rose petals.',
    price: 13.00,
    category: 'desserts',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Smoked Alphonso Mango Martini',
    description: 'A luxurious cocktail blending artisanal gin, fresh Alphonso mango purée, lime, and infused with aromatic hickory smoke.',
    price: 17.00,
    category: 'drinks',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr2',
    name: 'Rose & Cardamom Velvet Lassi',
    description: 'Hand-churned artisanal yogurt drink delicately flavored with Damask rose water, crushed green cardamom, and toasted pistachios.',
    price: 10.00,
    category: 'drinks',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr3',
    name: 'Royal Spiced Old Fashioned',
    description: 'Small-batch bourbon stirred with jaggery syrup, aromatic bitters, star anise, and flamed orange peel.',
    price: 18.50,
    category: 'drinks',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Victoria Sterling',
    role: 'Food & Wine Critic',
    comment: 'Spice Haven redefines modern fine dining. The Truffle Malai Paneer and Awadhi Dum Biryani showcase an exquisite mastery of flavor, texture, and heritage.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Executive Chef & Restateur',
    comment: 'An absolute masterpiece of interior ambiance and culinary precision. The attention to detail in their slow-simmered Dal Makhani is second to none in the city.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'July 2026'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Regular Patron',
    comment: 'From the moment you step in, the hospitality is warm and world-class. The Smoked Mango Martini and Galouti Kebabs make every celebration unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026'
  },
  {
    id: 't4',
    name: 'Dr. Aris Vance',
    role: 'Gastronomy Enthusiast',
    comment: 'Spice Haven is a sensory triumph. The presentation, the depth of the gravies, and the pristine ambiance create an evening of pure magic.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'June 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Main Dining Hall & Ambient Lighting',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'g2',
    title: 'Chef Aarav preparing signature Tandoori creations',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1'
  },
  {
    id: 'g3',
    title: 'Artisanal Cocktails & Bar Lounge',
    category: 'Bar',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1'
  },
  {
    id: 'g4',
    title: 'Royal Biryani served in traditional copper Handi',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'g5',
    title: 'Intimate Private Dining Alcove',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1'
  },
  {
    id: 'g6',
    title: 'Saffron Panna Cotta with Gold Leaf',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-1'
  }
];

export const RESTAURANT_INFO = {
  name: 'Spice Haven',
  tagline: 'Authentic Flavours. Unforgettable Moments.',
  address: '742 Kensington High Street, London W8 0SG',
  phone: '+44 20 7946 0912',
  email: 'reservations@spicehaven.co.uk',
  hours: {
    weekdays: '12:00 PM – 11:30 PM',
    weekend: '12:00 PM – 12:30 AM'
  },
  experienceYears: 16,
  executiveChef: 'Aarav Kapoor',
  chefBio: 'With over two decades in Michelin-starred establishments across Mumbai, London, and Paris, Chef Kapoor fuses centuries-old royal spice traditions with contemporary culinary presentation.'
};
