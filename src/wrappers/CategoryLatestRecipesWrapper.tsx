import { Link, useParams } from "react-router-dom";
import RecipeCardResult from "../components/RecipeCardResult";
import { Category } from "../types/type";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverURL } from "../lib/constants";

export default function CategoryLatestRecipesWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${serverURL}/api/category/${slug}`, {
        headers: {
          "X-API-KEY": "wn1H3Jmqwn",
        },
      })
      .then((response) => {
        setCategory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error Loading: {error}</p>;
  }

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <section id="LatestRecipes" className="px-5 mt-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Latest Recipes</h2>
      </div>
      <div className="flex flex-col gap-[18px] mt-[18px]">
        {category.recipes.length > 0 ? (
          category.recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.slug}`} key={recipe.id}>
              <RecipeCardResult recipe={recipe}></RecipeCardResult>
            </Link>
          ))
        ) : (
          <p>Belum ada data terkait</p>
        )}
      </div>
    </section>
  );
}
