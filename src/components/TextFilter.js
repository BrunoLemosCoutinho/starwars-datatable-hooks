import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TextFilter() {
  const {
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  const { filters: { filterByName } } = filters;

  const onChange = (event) => {
    const { name: objectKey, value } = event.target;

    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByName: {
          ...filters.filters.filterByName,
          [objectKey]: value,
        },
      },
    });
  };

  return (
    <label htmlFor="text-input">
      Planet name:
      <input
        type="text"
        id="text-input"
        name="name"
        data-testid="name-filter"
        placeholder="Type planet name"
        onChange={ (event) => onChange(event) }
        value={ filterByName.name }
      />
    </label>
  );
}

export default TextFilter;
