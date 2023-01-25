import { Hit as AlgoliaHit } from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import {
  InstantSearch,
  Highlight,
  Hits,
  Pagination,
  SearchBox,
} from 'react-instantsearch-hooks-web';

import './App.css';

const searchClient = algoliasearch(
  'LDJGR5OORW',
  'baa58cea7b344ad006f7f01492b22bfe'
);

type HitProps = {
  hit: AlgoliaHit<{
    va_title: string;
    va_url: string;
    va_body: string;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <article>
        <a href={hit.va_url}>
          <h1>
            <Highlight attribute="va_title" hit={hit} />
          </h1>
        </a>
        <p>
          <Highlight attribute="va_body" hit={hit} />
        </p>
        <p>{hit.va_url}</p>
      </article>
    </>
  );
}

export function App() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="local_drupal"
      routing={true}
    >
      <div className="Container">
        <SearchBox placeholder="Search" autoFocus />
        <Hits hitComponent={Hit} />
        <Pagination className="Pagination" />
      </div>
    </InstantSearch>
  );
}
