import { useState } from 'react';
import ResourceArticleWrapper from '../ResourceArticleWrapper';

export default function FoodCostCalculatorPage() {
  const [sellingPrice, setSellingPrice] = useState<number>(25);
  const [ingredientCost, setIngredientCost] = useState<number>(7.5);
  const [laborCost, setLaborCost] = useState<number>(5);

  const foodCostPercentage = sellingPrice > 0 ? ((ingredientCost / sellingPrice) * 100).toFixed(1) : '0.0';
  const trueProfit = sellingPrice - ingredientCost - laborCost;
  const trueMarginPercentage = sellingPrice > 0 ? ((trueProfit / sellingPrice) * 100).toFixed(1) : '0.0';

  return (
    <ResourceArticleWrapper path="/resources/food-cost-calculator">
      <h1 className="font-display font-medium text-4xl md:text-5xl text-steward-text-primary mb-12">
        True Food Cost & Margin Calculator
      </h1>

      <p>
        Most restaurants calculate their food cost based solely on ingredients. But a dish that takes 30 minutes of prep time has a vastly different <em>true</em> margin than a dish that takes 3 minutes to plate. Use this tool to calculate your real margins factoring in direct labor.
      </p>

      <div className="my-12 p-8 rounded-2xl bg-steward-surface border border-steward-border shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block font-primary text-sm text-steward-text-secondary mb-2">Selling Price ($)</label>
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full bg-steward-canvas border border-steward-border rounded-lg px-4 py-3 text-steward-text-primary focus:outline-none focus:border-steward-accent transition-colors"
                min="0"
                step="0.5"
              />
            </div>
            <div>
              <label className="block font-primary text-sm text-steward-text-secondary mb-2">Total Ingredient Cost ($)</label>
              <input
                type="number"
                value={ingredientCost}
                onChange={(e) => setIngredientCost(Number(e.target.value))}
                className="w-full bg-steward-canvas border border-steward-border rounded-lg px-4 py-3 text-steward-text-primary focus:outline-none focus:border-steward-accent transition-colors"
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <label className="block font-primary text-sm text-steward-text-secondary mb-2">Estimated Prep/Cook Labor Cost ($)</label>
              <input
                type="number"
                value={laborCost}
                onChange={(e) => setLaborCost(Number(e.target.value))}
                className="w-full bg-steward-canvas border border-steward-border rounded-lg px-4 py-3 text-steward-text-primary focus:outline-none focus:border-steward-accent transition-colors"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-steward-canvas rounded-xl p-6 border border-steward-border flex flex-col justify-center gap-6">
            <div>
              <p className="font-primary text-sm text-steward-text-secondary mb-1">Standard Food Cost</p>
              <div className="flex items-end gap-3">
                <span className="font-display text-4xl text-steward-text-primary">{foodCostPercentage}%</span>
                <span className="text-sm text-steward-text-muted mb-1">Target: ~28-32%</span>
              </div>
            </div>
            
            <div className="h-px bg-steward-border w-full"></div>

            <div>
              <p className="font-primary text-sm text-steward-text-secondary mb-1">True Profit (After Labor)</p>
              <div className="flex items-end gap-3">
                <span className="font-display text-4xl text-steward-accent">${trueProfit.toFixed(2)}</span>
              </div>
            </div>

            <div>
              <p className="font-primary text-sm text-steward-text-secondary mb-1">True Margin %</p>
              <div className="flex items-end gap-3">
                <span className="font-display text-2xl text-steward-text-primary">{trueMarginPercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-display font-medium text-3xl text-steward-text-primary mt-12 mb-6">
        Why standard food cost isn't enough
      </h2>

      <p>
        If you sell a burger for $20 and the ingredients cost $6, your food cost is 30%. But if that burger takes 10 minutes of active line-cook labor to prepare (costing roughly $4 in labor at standard wages), your true cost to produce the dish is $10, not $6. Your true margin drops to 50%.
      </p>

      <p>
        Restaurants that scale successfully understand the difference between gross ingredient margin and true operational margin. They engineer their menus not just for low ingredient costs, but for high operational efficiency on the line. 
      </p>
    </ResourceArticleWrapper>
  );
}
