export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Bathroom Tiling',
    description: 'Transform your bathroom with our expert tiling services. We specialize in waterproof installations, decorative patterns, and premium finishes that withstand moisture.',
    icon: 'Droplets'
  },
  {
    id: 2,
    title: 'Kitchen Backsplashes',
    description: 'Elevate your kitchen with stylish and functional backsplashes. From subway tiles to intricate mosaics, we install durable surfaces that protect walls while adding beauty.',
    icon: 'UtensilsCrossed'
  },
  {
    id: 3,
    title: 'Floor Installations',
    description: 'Durable and beautiful floor tiling for any room. We work with porcelain, ceramic, natural stone, gliter, slate  and luxury vinyl tiles to create stunning and long-lasting floors.',
    icon: 'SquareStack'
  },
  {
    id: 4,
    title: 'Outdoor Tiling',
    description: 'Weather-resistant outdoor tiling for patios, walkways, and pool decks. We use frost-proof, slip-resistant materials designed to withstand the elements.',
    icon: 'Sun'
  },
  {
    id: 5,
    title: 'Tile Repair & Replacement',
    description: 'Restore damaged tiles with our expert repair services. We can match existing patterns and replace cracked or loose tiles to revitalize your surfaces.',
    icon: 'Wrench'
  },
  {
    id: 6,
    title: 'Custom Designs',
    description: 'Bring your vision to life with custom tiling designs. From intricate mosaics to unique patterns, we create personalized installations that reflect your style.',
    icon: 'Palette'
  }
];

export default services;