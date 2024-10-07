import { baseURL } from "../lib/constants";
import { Recipe } from "../types/type";

export default function FeaturedRecipeCard({ recipe }: RecipeProps) {
  return (
    <>
      <div className="card">
        <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
          <img
            src={`${baseURL}/${recipe.thumbnail}`}
            className="absolute object-cover w-full h-full"
            alt="thumbnails"
          />
          <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
          <div className="relative z-20 flex flex-col justify-between h-full p-5">
            <div className="flex items-center px-2 py-1 rounded-full shrink-0 w-fit bg-white/20 backdrop-blur">
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4"
                alt="star"
              />
              <span className="font-semibold text-xs leading-[18px] text-white">
                4.5
              </span>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-bold text-xl leading-[28px] text-white">
                {recipe.name}
              </h3>
              <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
                {recipe.category.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
interface RecipeProps {
  recipe: Recipe;
}
