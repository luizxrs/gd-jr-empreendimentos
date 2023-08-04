import { twMerge } from "tailwind-merge";

interface IImageStack {
  order: 0 | 1 | 2;
  directionUp: boolean;
}

export default function ImageStack({ order, directionUp }: IImageStack) {
  const images = [
    [
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2Fe062fb3b-6b50-40c8-b9ec-11067372a819_xl.webp&w=1920&q=75",
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2Fee57dba8-56f4-4f1a-8655-57ebe264aff7_xl.webp&w=1920&q=75",
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2F9ad2b13a-2a9c-46f5-bf48-48a2ab4f3648_xl.webp&w=1920&q=75",
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2F1f55fa21-bdbb-46b1-a27e-d306bf8050ef_xl.webp&w=1920&q=75",
    ],
    [
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2Fb8ec8472-395f-47d1-99de-93a093486d4d_xl.webp&w=1920&q=75",
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2Ff8bb00e0-e4fd-4f27-a2bc-afa889097257_xl.webp&w=1920&q=75",
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2F5b4924a8-cbaf-4b68-9979-5d30f40ebc63_xl.webp&w=1920&q=75",
      "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2F081fe24c-3999-4fe8-b737-3712ff790091_xl.webp&w=1920&q=75",
    ],
  ];

  return (
    <>
      <div
        className={twMerge(
          "flex flex-col w-full h-[200%]",
          directionUp ? "animate-slideUp" : "animate-slideDown"
        )}
      >
        <div className="flex flex-col h-full gap-12 w-full">
          {images[order].map((image) => {
            return (
              <div className="w-full h-1/4" key={image}>
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col h-full gap-12 w-full">
          {images[order].map((image) => {
            return (
              <div className="w-full h-1/4 " key={image}>
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
