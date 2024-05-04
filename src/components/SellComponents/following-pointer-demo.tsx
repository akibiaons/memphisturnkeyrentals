import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";

export function FollowingPointerDemo() {
  return (
    <div className=" mx-auto flex flex-1 flex-row md:flex-row justify- items-center">
      {blogContent.map((content) => (
        <div className="w-80" key={content.slug}>
          <FollowerPointerCard
            // Assuming 'slug' is unique for each entry
            title={
              <TitleComponent
                title={content.author}
                avatar={content.authorAvatar}
              />
            }
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={content.image}
                  alt="thumbnail"
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  {content.title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  {content.description}
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">{content.date}</span>
                  <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      ))}
    </div>
  );
}

const blogContent = [
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/227/251/large_2x/real-estate-agent-and-client-shaking-hands-free-photo.jpg",
    authorAvatar: "https://media.graphassets.com/LDMBVg5HTFetcGRC7nkY",
  },
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/227/251/large_2x/real-estate-agent-and-client-shaking-hands-free-photo.jpg",
    authorAvatar: "https://media.graphassets.com/LDMBVg5HTFetcGRC7nkY",
  },
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/227/251/large_2x/real-estate-agent-and-client-shaking-hands-free-photo.jpg",
    authorAvatar: "https://media.graphassets.com/LDMBVg5HTFetcGRC7nkY",
  },
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/227/251/large_2x/real-estate-agent-and-client-shaking-hands-free-photo.jpg",
    authorAvatar: "https://media.graphassets.com/LDMBVg5HTFetcGRC7nkY",
  },
];

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
