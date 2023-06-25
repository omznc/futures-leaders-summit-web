# Futures Leaders Summit

> This has been archived and moved to the official BHFF Github account. No further work will be done here as it has served its purpose - being a personal redesign that has been merged upstream.

My reasoning behind the rewrite was to stay more up-to-date with the most
current tools we were already using, and to distance ourselves from
miscellaneous dependencies that were not being maintained, by creating our own
implementations of them.

This project tries to minimize the amount of dependencies we use, and tries to
use the most up-to-date versions of the ones we do.

This project uses:

-   `pnpm` as the package manager
-   `husky` to run pre-commit hooks
-   `zustand` for state management
-   `swr` for data fetching
-   `react-icons` for icons
-   `tailwindcss` for styling (or CSS modules)
-   `prettier` for code formatting

## Contribution Guide

The actual code is in the `src` directory, and the `public` directory is used
for media.

Every folder in the `src` directory has a Typescript import alias, and is
aliased to the `src` directory. Here's an example:

```typescript
import Footer from '@components/Footer/Footer';
import SomeImage from '@public/some-image.webp';
import ISomeInterface from '@interfaces/ISomeInterface';
```

can be used instead of

```typescript
import Footer from '../../components/Footer/Footer';
import SomeImage from '../../../../public/some-image.webp';
import ISomeInterface from '../interfaces/ISomeInterface';
```

### Components & Styling

Components are stored in the `src/components` directory.

Each component has its own folder, and may contain subcomponents if they're only
used in that component, and are non-atomic. An example would be the `Keynotes`
component that contains the `Keynote` component. Do not create a subcomponent as
a separate file.

The following would be the example setup for a component named `Footer`

```
src
└── components
    └── Footer
        ├── Footer.tsx
        ├── style.module.css (if not using tailwind)
        └── readme.md (optional, but useful for documentation)
```

### Tailwind

Just use it as you normally would, no need for the `style.module.css` file. You
have the following colors as custom colors:

-   `theme-color`
-   `primary-gray`
-   `secondary-gray`

### If you're not using tailwind

Stylesheets use CSS Modules, and are stored next to the component they're used
in. The stylesheet should be named `style.module.css`, and should be imported as
`styles` in the component.

You have the following colors as `var()`-s:

-   `--theme-color`
-   `--primary-gray`
-   `--secondary-gray`

If you're using more than 1 class in an element, use
`[styles.class1, styles.class2].join(' ')` to join the classes together, instead
of `${styles.class1} ${styles.class2}`, as it's easier to modify. Or `classes()` from `@helpers/classes`.

The following is an example of a component named`Footer` with a stylesheet.

```typescript
import styles from './style.module.css';
```

If a component accepts props, create a type for the prop before using it. The
type should be named the same as the component, with the `Props` suffix.

```typescript
type FooterProps = {
	// ...
};

export default function Footer({ ... }: FooterProps) {
	// ...
}
```

### Pages

Pages are stored in the `src/app` (`@app`) directory. **The `src/pages`
(`@pages`) directory is only used for the API.**

Be sure to read up on Next.js 13's routing system to understand how to use the
`app` directory: https://beta.nextjs.org/docs/getting-started#features-overview

#### SEO

Each page contains a `metadata` export that uses NextJS 13.2's new SEO system.
Re-usable SEO variables should be stored in `src/helpers/seo.ts`
(`@helpers/seo`).

### Interfaces

Interfaces are stored in the `src/interfaces` (`@interfaces`) directory. The
naming convention is `I` followed by `<Name>`, where `<Name>` is the name of the
interface. For example, `IUser`.

TODO: Figure out how to group interfaces into files. The current implementation
stores them in a single `interfaces.ts` file.

### Media

Media is stored in the `public` (`@public`) directory. All images should be in
the `.webp` format, and should be compressed, but not destroyed.

All icons are provided by the `react-icons` library, and can be found here:
https://react-icons.github.io/react-icons/, and custom icons or logos should be
vectors (SVGs).
