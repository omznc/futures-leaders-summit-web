# Futures Leaders Summit

My reasoning behind the rewrite was to stay more up-to-date with the most current tools we were already using, and to
distance ourselves from miscellaneous dependencies that were not being maintained, by creating our own implementations
of them.

This project tries to minimize the amount of dependencies we use, and tries to use the most up-to-date versions of the
ones we do.

## FLS Contribution Guide

---

The actual code is in the `src` directory, and the `public` directory is used for media.

Every folder in the `src` directory has a Typescript import alias, and is aliased to the `src` directory.
Here's an example:

```typescript
import Footer from '@components/Footer';
import SomeImage from '@public/some-image.webp';
import ISomeInterface from '@interfaces/ISomeInterface';
```

can be used instead of

```typescript
import Footer from '../../components/Footer';
import SomeImage from '../../../../public/some-image.webp';
import ISomeInterface from '../interfaces/ISomeInterface';
```

### Components

---

Components are stored in the `src/components` directory.

Each component has its own folder, and may contain subcomponents if
they're only used in that component, and are non-atomic.
An example would be the `Keynotes` component that contains
the `Keynote` component. Do not create a subcomponent as a separate file.

The following would be the example setup for a component named `Footer`

```
src
└── components
    └── Footer
        ├── Footer.tsx
        ├── Footer.module.css
        └── readme.md (optional, but useful for documentation)
```

Stylesheets use CSS Modules, and are stored next to the component they're used in. The stylesheet should be named the
same as the component, with the `.module.css` extension, and should be imported as `styles` in the component.

If you're using more than 1 class in an element, use `[styles.class1, styles.class2].join(' ')` to join the classes
together, instead of `${styles.class1} ${styles.class2}`, as it's easier to modify.

The following is an example of a component named`Footer` with a stylesheet.

```typescript
import styles from './Footer.module.css';
```

If a component accepts props, create a type for the prop before using it. The type should be named the same as the
component, with the `Props` suffix.

```typescript
type FooterProps = {
	// ...
};

export default function Footer({ ... }: FooterProps) {
	// ...
}
```

### Pages

---

Pages are stored in the `src/app` (`@app`) directory. **The `src/pages` (`@pages`) directory is only used for the API.**

Be sure to read up on Next.js 13's routing system to understand how to use
the `app` directory: https://beta.nextjs.org/docs/getting-started#features-overview

### Interfaces

---

Interfaces are stored in the `src/interfaces` (`@interfaces`) directory. The naming convention is `I` followed
by `<Name>`,
where `<Name>`
is
the name of the interface. For example, `IUser`.

TODO: Figure out how to group interfaces into files. The current implementation stores them in a single `interfaces.ts`
file.

### Media

---

Media is stored in the `public` (`@public`) directory. All images should be in the `.webp` format, and should be
compressed, but not
destroyed.

All icons are provided by the `react-icons` library, and can be found here: https://react-icons.github.io/react-icons/,
and custom icons or logos should be vectors (SVGs).
