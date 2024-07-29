import brown from "../../public/portfolios/brown.png";
import gray from "../../public/portfolios/gray.png";
import tadua from "../../public/portfolios/tadua.png";
import pink from "../../public/portfolios/pink.png";
import purple from "../../public/portfolios/purple.png";
import photograph from "../../public/portfolios/photographer.png";
import najia from "../../public/portfolios/najia.png";
import blobs from "../../public/portfolios/blob.png";
export interface Data {
  id: number;
  title: string;
  image: string;
  tools: string;
  url: string;
}
export const portfoliosData: Data[] = [
  {
    id: 0,
    title: "Pink  Portfolio with smoth animations",
    image: pink,
    tools: "tailwind-nextjs-framerMotion",
    url: "https://portfolio-wq.github.io/pink-1/",
  },
  {
    id: 1,
    title: "Simple gray portfolio",
    image: gray,
    tools: "tailwind-nextjs",
    url: "https://portfolio-wq.github.io/ex1-simple-gray/",
  },
  {
    id: 2,
    title: "Brown style portfolio with animations",
    image: brown,
    tools: "tailwind-nextjs-framerMotion",
    url: "https://portfolio-wq.github.io/ex9-brown/",
  },
  {
    id: 3,
    title: "Portfolio design for girls",
    image: tadua,
    tools: "tailwind-nextjs-framerMotion",
    url: "https://portfolio-wq.github.io/ex8-tadua/",
  },
  {
    id: 4,
    title: "Waves portfolio design",
    image: purple,
    tools: "tailwind-nextjs",
    url: "https://portfolio-wq.github.io/ex3-waves/",
  },
  {
    id: 5,
    title: "Portfolio for photographers",
    image: photograph,
    tools: "tailwind-nextjs",
    url: "https://portfolio-wq.github.io/ex2-photographer/",
  },
  {
    id: 6,
    title: "More advanced Portfolio with pages",
    image: najia,
    tools: "tailwind-nextjs-GASP",
    url: "https://portfolio-wq.github.io/ex10-najia/",
  },
  {
    id: 7,
    title: "Portfolio with blobs design",
    image: blobs,
    tools: "tailwind-next-blobs",
    url: "https://portfolio-wq.github.io/ex5-blobs-red/",
  },
];
