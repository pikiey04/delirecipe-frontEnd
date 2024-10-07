import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedRecipeCard from "../components/FeaturedRecipeCard";
import { Recipe } from "../types/type";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { serverURL } from "../lib/constants";

export default function BrowseFeaturedRecipesWrapper() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${serverURL}/api/recipes`, {
        headers: {
          "X-API-KEY": "wn1H3Jmqwn",
        },
      })
      .then((response) => {
        setRecipes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  return (
    <section id="MadeByPeople">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-bold">Made by People</h2>
        <a
          href="#"
          className="font-semibold text-sm leading-[21px] text-[#FF4C1C]"
        >
          Explore All
        </a>
      </div>
      <div className="w-full mt-3 swiper">
        <Swiper
          className="w-full mt-3"
          direction="horizontal"
          spaceBetween={16}
          slidesPerView="auto"
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id} className=" !w-fit">
              <Link to={`recipe/${recipe.slug}`}>
                <FeaturedRecipeCard recipe={recipe} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
