import React from "react";

const Page = () => {
  return (
    <div className="bg-stone-100 sm:py-20 flex justify-center">
      <div className="font-secondary font-normal text-base bg-white rounded-2xl overflow-hidden sm:max-w-2xl">
        <div>
          <img src="/image-omelette.jpeg"></img>
        </div>

        <div className="p-9">
          <div className="mb-8">
            <h1 className="text-4xl mb-8 font-primary">
              Simple Omelette Recipe
            </h1>
            <p className="text-base text-stone-600">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>

          <div className="p-5 mb-8 bg-rose-50 rounded-2xl font-secondary">
            <h2 className="text-xl text-rose-800 font-semibold">
              Preparation time
            </h2>
            <ol className="list-disc px-5 pt-5 text-stone-600">
              <li className="marker:text-rose-800 pb-2">
                <span className="font-semibold text-stone-900">Total: </span>
                Approximately 10 minutes
              </li>
              <li className="marker:text-rose-800 pb-2">
                <span className="font-semibold text-stone-900">
                  Preparation:{" "}
                </span>
                5 minutes
              </li>
              <li className="marker:text-rose-800">
                <span className="font-semibold text-stone-900">Cooking: </span>5
                minutes
              </li>
            </ol>
          </div>

          <div className="mb-8 pb-8 border-b-2">
            <h2 className="text-2xl text-brown-800 font-primary">
              Ingredients
            </h2>
            <ol className="list-disc px-5 pt-5 text-stone-600 marker:text-brown-800">
              <li className="pb-2 pl-4">2-3 large eggs</li>
              <li className="pb-2 pl-4">Salt, to taste</li>
              <li className="pb-2 pl-4">Pepper, to taste</li>
              <li className="pb-2 pl-4">1 tablespoon of butter or oil</li>
              <li className="pb-2 pl-4">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ol>
          </div>

          <div className="mb-8 pb-8 border-b-2">
            <h2 className="text-2xl text-brown-800 font-primary">
              Instructions
            </h2>
            <ul className="list-decimal px-5 pt-5 text-stone-600 marker:text-brown-800">
              <li className="pb-2 pl-4">
                <span className="font-bold">Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture
              </li>
              <li className="pb-2 pl-4">
                <span className="font-bold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="pb-2 pl-4">
                <span className="font-bold">Cook the omelette:</span> Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li className="pb-2 pl-4">
                <span className="font-bold">Add fillings (optional): </span>When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li className="pb-2 pl-4">
                <span className="font-bold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="pb-2 pl-4">
                <span className="font-bold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-brown-800 font-primary">Nutrition</h2>
            <p className="py-5 text-stone-600">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <ol className="w-full">
              <li className="w-full flex justify-between border-b-2 pb-3 pl-8 pr-20 mb-3 sm:pr-36">
                <p className="text-stone-600">Calories</p>
                <p className="text-brown-800 font-semibold w-14">277kcal</p>
              </li>

              <li className="w-full flex justify-between border-b-2 pb-3 pl-8 pr-20 mb-3 sm:pr-36">
                <p className="text-stone-600">Carbs</p>
                <p className="text-brown-800 font-semibold w-14">0g</p>
              </li>

              <li className="w-full flex justify-between border-b-2 pb-3 pl-8 pr-20 mb-3 sm:pr-36">
                <p className="text-stone-600">Protein</p>
                <p className="text-brown-800 font-semibold w-14">20g</p>
              </li>

              <li className="w-full flex justify-between pl-8 pr-20 sm:pr-36">
                <p className="text-stone-600">Fat</p>
                <p className="text-brown-800 font-semibold w-14">22g</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
