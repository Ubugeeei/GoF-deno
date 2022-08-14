test:
	deno test ./src/abstract_factory/impl.ts
	deno test ./src/adapter/impl.ts
	deno test ./src/builder/impl.ts
	deno test ./src/factory/impl.ts
	deno test --allow-all ./src/factory_method/impl.ts
	deno test ./src/prototype/impl.ts
	deno test ./src/singleton/impl.ts