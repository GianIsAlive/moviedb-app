import { connect } from 'react-redux';

import HeaderView from './HeaderView';

const mapStateToProps = state => state.headerReducer;

const Header = connect(mapStateToProps)(HeaderView);

export default Header;
