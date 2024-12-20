export const mockFarms = [
  {
    id: '1',
    name: 'Green Valley Urban Farm',
    description: 'Sustainable urban farm specializing in organic vegetables and herbs. We offer educational tours and weekly farmer\'s markets. Our mission is to bring fresh, locally grown produce to our community while promoting sustainable farming practices.',
    imageUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
    location: {
      address: '123 Green Valley Road',
      city: 'Portland',
      state: 'OR'
    },
    products: [
      {
        id: 'p1',
        name: 'Organic Vegetables Bundle',
        description: 'Fresh seasonal vegetables grown without pesticides',
        price: '$25/week',
        imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
        category: 'Vegetables',
        sizes: ['Small Box', 'Medium Box', 'Large Box'],
        unit: 'box'
      },
      {
        id: 'p2',
        name: 'Fresh Herbs Pack',
        description: 'Mix of culinary herbs: basil, thyme, rosemary',
        price: '$12/bundle',
        imageUrl: 'https://images.unsplash.com/photo-1600231915711-f06c193e8e9b',
        category: 'Herbs',
        sizes: ['Small Bundle', 'Large Bundle'],
        unit: 'bundle'
      }
    ],
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        user: {
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        },
        rating: 5,
        comment: 'Amazing fresh produce and wonderful educational tours!',
        date: '2024-02-15'
      }
    ],
    distance: 2.3,
    host: {
      id: 'h1',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Passionate about sustainable farming and community education',
      joinedDate: 'March 2020'
    },
    farmingApproach: {
      type: 'regenerative',
      description: 'We practice regenerative agriculture focusing on soil health, biodiversity, and carbon sequestration. Our methods include cover cropping, minimal tillage, and composting.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad',
      'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6'
    ]
  },
  {
    id: '2',
    name: 'City Roots Farm',
    description: 'Vertical farming in the heart of the city. We grow microgreens, leafy vegetables, and offer community workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
    location: {
      address: '456 Urban Street',
      city: 'Portland',
      state: 'OR'
    },
    products: [
      {
        id: 'p3',
        name: 'Microgreens Mix',
        description: 'Nutrient-dense microgreens mix',
        price: '$8/pack',
        imageUrl: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
        category: 'Microgreens',
        sizes: ['100g Pack', '200g Pack', '500g Pack'],
        unit: 'pack'
      }
    ],
    rating: 4.6,
    reviews: [
      {
        id: 'r2',
        user: {
          name: 'David Wilson',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
        },
        rating: 4,
        comment: 'Great workshops and fresh produce!',
        date: '2024-02-10'
      }
    ],
    distance: 3.1,
    host: {
      id: 'h2',
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Urban farming enthusiast and educator',
      joinedDate: 'June 2021'
    },
    farmingApproach: {
      type: 'permaculture',
      description: 'Our vertical farming system integrates permaculture principles with modern technology, maximizing space efficiency while maintaining ecological balance.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
      'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6'
    ]
  },
  {
    id: '3',
    name: 'Infarm Berlim',
    description: 'Vertical farming in the heart of the city. We grow microgreens, leafy vegetables, and offer community workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
    location: {
      address: '456 Urban Street',
      city: 'Berlim',
      state: 'DE'
    },
    products: [
      {
        id: 'p4',
        name: 'Microgreens Mix',
        description: 'Nutrient-dense microgreens mix',
        price: '$8/pack',
        imageUrl: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
        category: 'Microgreens',
        sizes: ['100g Pack', '200g Pack', '500g Pack'],
        unit: 'pack'
      },
      {
        id: 'p5',
        name: 'Mushroom Bundle',
        description: 'Nutrient-dense microgreens mix',
        price: '$8/pack',
        imageUrl: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
        category: 'Microgreens',
        sizes: ['100g Pack', '200g Pack', '500g Pack'],
        unit: 'pack'
      }
    ],
    rating: 4.6,
    reviews: [
      {
        id: 'r3',
        user: {
          name: 'David Wilson',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
        },
        rating: 4,
        comment: 'Great workshops and fresh produce!',
        date: '2024-02-10'
      },
      {
        id: 'r4',
        user: {
          name: 'John Doe',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
        },
        rating: 5,
        comment: 'Great workshops and fresh produce!',
        date: '2024-03-15'
      }
    ],
    distance: 3.1,
    host: {
      id: 'h3',
      name: 'Infarm',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'We are growing a global network of climate-resilient farms that are closer to our communities and kinder to the environment',
      joinedDate: 'June 2024'
    },
    farmingApproach: {
      type: 'permaculture',
      description: 'Each of our farms is a climate machine, designed to create the perfect conditions for the crops it hosts. Our production is never affected by floods or droughts. Always in stock, always fresh.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
      'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6'
    ]
  }
];