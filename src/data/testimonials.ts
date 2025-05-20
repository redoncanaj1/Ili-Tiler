export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ili Tiler transformed our outdated bathroom into a modern sanctuary. The attention to detail and craftsmanship was exceptional, and they completed the job on time and within budget.",
    author: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    id: 2,
    quote: "As a contractor, I've worked with many tiling companies, but Ili Tiler stands out for their professionalism and quality work. They're my go-to team for all tiling projects.",
    author: "Michael Rodriguez",
    role: "General Contractor"
  },
  {
    id: 3,
    quote: "The kitchen backsplash Ili Tiler installed is the highlight of our renovation. They provided excellent guidance on tile selection and the installation is flawless.",
    author: "Jennifer Adams",
    role: "Homeowner"
  },
  {
    id: 4,
    quote: "We hired Ili Tiler to install porcelain wood-look tiles throughout our main floor, and the results exceeded our expectations. Their crew was courteous, clean, and highly skilled.",
    author: "David Williams",
    role: "Real Estate Investor"
  }
];

export default testimonials;