# Futures Leaders Summit

Created with Typescript, Next.js 13, and Node.js 19.

My reasoning behind the rewrite was to stay more up-to-date with the most current tools we were already using, and to
distance ourselves from miscellaneous dependencies that were not being maintained, by creating our own implementations
of them.

This project a single non-development external dependency (react-icons), and
keeping it that way is a goal we should strive for.

## FLS Contribution Guide

### Components

Components are stored in the `components` directory.

Each component has its own folder, and may contain subcomponents if
they're only used in that component, and are non-atomic.
An example would be the `Keynotes` component that contains
the `Keynote` component. Do not create a subcomponent as a separate file.

The following would be the example setup for a component named `Footer`

```
components
└── Footer
    ├── Footer.js
    ├── Footer.module.css
    └── readme.md (optional, but useful for documentation)
```

Stylesheets use CSS Modules, and are stored next to the component they're used in. The stylesheet should be named the
same as the component, with the `.module.css` extension, and should be imported as `styles` in the component.

The following is an example of a component named `Footer` with a stylesheet.

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

Pages are stored in the `app` directory. **The `pages` directory is only used for the API.**

Be sure to read up on Next.js 13's routing system to understand how to use
the `app` directory: https://beta.nextjs.org/docs/getting-started#features-overview

### Interfaces

Interfaces are stored in the `interfaces` directory. The naming convention is `I` followed by `<Name>`, where `<Name>`
is
the name of the interface. For example, `IUser`.

TODO: Figure out how to group interfaces into files. The current implementation stores them in a single `interfaces.ts`
file.

### Media

Media is stored in the `public` directory. All images should be in the `.webp` format, and should be compressed, but not
destroyed.

All icons are provided by the `react-icons` library, and can be found here: https://react-icons.github.io/react-icons/,
and custom icons or logos should be vectors (SVGs).
