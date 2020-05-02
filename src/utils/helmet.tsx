import * as React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from 'assets/images/favicon.png';
import Share from 'assets/images/favicon.png';

const title = 'gatsby-starter-mobx-react-hooks-context-api';
const description = 'Gatsby MobX starter using React Hooks & Context API.';

export const helmet = {
  title,
  titleTemplate: 'gatsby-starter-mobx-react-hooks-context-api',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: Share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: Share },
    { name: 'twitter:site', content: '@chriswolmarans' },
    { name: 'twitter:creator', content: '@chriswolmarans' },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: Favicon }],
};

type GatsbyHelmetProps = {
  title?: string
  description?: string
  [key: string]: any
}

export const GatsbyHelmet: React.FC<GatsbyHelmetProps> = ({ ...props }) => {
  // return <Helmet {...props}>{children}</Helmet>
  console.log('props => ', props);
  return (
    <Helmet>
      <title key="title">
        {props.title
          ? `${props.title} - ${helmet.titleTemplate}`
          : helmet.title}
      </title>

      <meta
        key="description"
        name="description"
        content={
          props.description
            ? props.description
            : (helmet as any).description
        }
      />
      {helmet.meta &&
      helmet.meta.map((meta_item) => (
        <meta
          key={
            meta_item.name
              ? meta_item.name
              : meta_item.property
              ? meta_item.property
              : ''
          }
          name={meta_item.name && meta_item.name}
          property={meta_item.property && meta_item.property}
          content={meta_item.content}
        />
      ))}
      {helmet.link &&
      helmet.link.map((link_item) => (
        <link
          key={link_item.href}
          rel={link_item.rel}
          type={link_item.type}
          href={link_item.href}
        />
      ))}
    </Helmet>
  );
};
