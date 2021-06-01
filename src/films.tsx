/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import { MenuItem } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select";
import React from "react";

export interface IFilm {
  /** Title of film. */
  title: string;
  /** Release year. */
  year: string;
  /** IMDb ranking. */
  rank: number;
}

/** Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top */
export const TOP_100_FILMS: IFilm[] = [
  { title: "OTTO Motors", year: "AMRs" },
  { title: "Geek+", year: "Warehouse" },
  { title: "Samsung", year: "Electronics" },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const renderFilm: ItemRenderer<IFilm> = (
  film,
  { handleClick, modifiers, query }
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${film.rank}. ${film.title}`;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={film.year}
      key={film.rank}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

export const filterFilm: ItemPredicate<IFilm> = (query, film) => {
  return (
    `${film.rank}. ${film.title.toLowerCase()} ${film.year}`.indexOf(
      query.toLowerCase()
    ) >= 0
  );
};

function highlightText(text: string, query: string) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map(escapeRegExpChars);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens: React.ReactNode[] = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

function escapeRegExpChars(text: string) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

export const filmSelectProps = {
  itemPredicate: filterFilm,
  itemRenderer: renderFilm,
  items: TOP_100_FILMS
};
