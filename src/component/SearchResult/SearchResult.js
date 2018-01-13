import { connect } from 'react-redux';

import SearchResultView from './SearchResultView';

const mapStateToProps = state => state.searchResultReducer;

const SearchResult = connect(mapStateToProps)(SearchResultView);

export default SearchResult;
