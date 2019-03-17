import React, { Component, createRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Hits, connectStateResults } from 'react-instantsearch-dom';

import classes from './Search.module.css';
import Input from './Input';
import * as hitComps from './hits';

const events = ['mousedown', 'touchstart'];

const Results = connectStateResults(({ searchState: state, searchResults: res, children }) =>
  res && res.nbHits ? children : <span>{`No results for ${state.query}`}</span>
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
);

export default class Search extends Component {
  searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  constructor(props) {
    super(props);
    this.state = { query: ``, focussed: false, ref: createRef() };
  }

  componentDidMount() {
    events.forEach(event => document.addEventListener(event, this.handleClickOutside));
  }

  componentWillUnmount() {
    events.forEach(event => document.removeEventListener(event, this.handleClickOutside));
  }

  updateState = state => this.setState(state);

  handleFocus = () => {
    this.setState({ focussed: true });
  };

  disableHits = () => {
    this.setState({ focussed: false });
  };

  handleClickOutside = event => {
    const { ref } = this.state;
    if (!ref.current.contains(event.target)) {
      this.setState({ focussed: false });
    }
  };

  render() {
    const { query, focussed, ref } = this.state;
    const { indices, collapse, hitsAsGrid, onClick } = this.props;
    const hitsWrapperClasses = [classes.HitsWrapper];
    if (hitsAsGrid) {
      hitsWrapperClasses.push(classes.Grid);
    } else {
      hitsWrapperClasses.push(classes.List);
    }
    if (collapse || !focussed || query.length <= 0) {
      hitsWrapperClasses.push(classes.Hide);
    }
    return (
      <InstantSearch
        searchClient={this.searchClient}
        indexName={indices[0].name}
        onSearchStateChange={this.updateState}
      >
        <div className={classes.Root} ref={ref}>
          <Input
            collapse={collapse}
            focussed={focussed}
            onFocus={this.handleFocus}
            onClick={onClick}
          />
          <div className={hitsWrapperClasses.join(' ')} hitsAsGrid={hitsAsGrid}>
            {indices.map(({ name, title, hitComp }) => (
              <Index key={name} indexName={name}>
                <header>
                  <h3>{title}</h3>
                  <span>
                    <Stats />
                  </span>
                </header>
                <Results>
                  <Hits hitComponent={hitComps[hitComp](this.disableHits)} />
                </Results>
              </Index>
            ))}
          </div>
        </div>
      </InstantSearch>
    );
  }
}
