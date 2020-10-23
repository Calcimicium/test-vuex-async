import Product from './models/product';
import Result from './models/result';

export default interface OpenFoodFactsState {
	pizzas: Result<Product>
}
