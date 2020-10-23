import AppState from '@/app-state'
import Axios from 'axios'
import { ActionContext, Module } from 'vuex'
import OpenfoodfactsState from './state'
import Product from './models/product'
import Result from './models/result'

export default {
	namespaced: true,
	state: {
		pizzas: {}
	},
	actions: {
		loadPizzasAsync
	},
	getters: {
		pizzas
	},
	mutations: {
		setPizzas
	}
} as Module<OpenfoodfactsState, AppState>

function pizzas(state: OpenfoodfactsState): Result<Product> {
	return state.pizzas
}

async function loadPizzasAsync(
	context: ActionContext<OpenfoodfactsState, AppState>
): Promise<void> {
	const url = "https://fr-en.openfoodfacts.org/category/pizzas/1.json"
	const response = await Axios.get(url)
	context.commit("setPizzas", response.data)
}

function setPizzas(state: OpenfoodfactsState, pizzas: Result<Product>): void {
	state.pizzas = pizzas
}
