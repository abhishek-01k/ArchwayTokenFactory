# Archwaytokenfactory - The Complete Token Launch Suite for Archway

ArchwayTokenFactory is a powerful tool that enables users to easily launch cw20 tokens on the Archway blockchain. With its intuitive interface and pre-configured token templates, users can create and customize their own tokens in just a few clicks.

### Features

- **Pre-configured token templates**: Choose from a variety of pre-designed token templates, each tailored for specific use cases such as crowdsourcing, investment DAOs, early-stage DAOs, memecoins, and more.
- **Customizable token parameters**: Adjust token details like name, symbol, supply allocation, voting rules, and more to fit your specific needs.
- **Seamless token creation**: Generate your token with just a few clicks, without the need for complex coding or smart contract deployment.
- **Archway integration**: Tokens created with ArchwayTokenFactory are fully compatible with the Archway blockchain, allowing for easy integration with other Archway-based applications.

### Getting Started

1. **Visit the ArchwayTokenFactory website**: Go to https://archway-tokenfactory.vercel.app/ and click on the "Login" button.
2. **Select a template**: Choose from one of the pre-configured token templates/ presets that best suits your needs.
3. **Customize your token**: Adjust the token details, such as name, symbol, supply allocation, voting rules, and more.
4. **Launch your token**: Review your token settings and click "Launch Token" to generate your token on the Archway blockchain.

### Token Templates / Presets

ArchwayTokenFactory offers several pre-configured token templates to choose from:

1. **Crowdsource Token**: Allocates 99% of options to AllStars and 1% to the team. DAO is governed by holders.
2. **Investment DAO**: Allocates 98% of tokens to the DAO treasury and 2% to the team. DAO is governed by investors.
3. **Early Stage DAO**: Allocates 100% of tokens to the team. Team decides the DAO's direction and issues further tokens.
4. **Memecoin**: Allocates 89% to the Allstar list, 10% to liquidity pool, and 1% to the team.
5. **Common Interest DAO**: Fixed supply of 100 tokens, with 1 token per address. DAO is governed by holders.
6. **Protocol DAO**: Allocates 60% to the team and 40% to the DAO. Team issues further tokens.
7. **Generic**: Customizable template with no pre-set allocations.

### Documentation

For more detailed information on each template and its specific parameters, please refer to the documentation provided for each template.

## Start the application

Run `npx nx dev archwaytokenfactory` to start the development server. Happy coding!

## Build for production

Run `npx nx build archwaytokenfactory` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

