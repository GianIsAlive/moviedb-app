import { connect } from 'react-redux';

import FooterView from './FooterView';

const mapStateToProps = state => state.footerReducer;

const Footer = connect(mapStateToProps)(FooterView);

export default Footer;
