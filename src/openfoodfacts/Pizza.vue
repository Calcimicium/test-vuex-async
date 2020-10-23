<template>
	<div>{{display}}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Action, Getter, namespace } from 'vuex-class';
import Result from './models/result';
import Product from './models/product';

const openfoodfacts = namespace('openfoodfacts');

@Component
export default class KeycloakUser extends Vue {
	@openfoodfacts.Action
	private loadPizzasAsync!: () => void;

	@openfoodfacts.Getter
	private pizzas!: Result<Product>;

	private display: string = "Chargement..."

	@Watch('pizzas')
	onPizzasChanged(pizzas: Result<Product>, oldPizzas: Result<Product>): void {
		if (pizzas.products && pizzas.products.length)
			this.display = pizzas.products[0].product_name || 'NC'
	}

	mounted(): void {
		this.loadPizzasAsync()
	}
}
</script>
