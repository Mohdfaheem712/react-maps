// Marker.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Wrapper = styled.div`
    position: absolute;
    width: 38px;
    height: 37px;
    background-image: url(https://icon-library.com/images/pin-icon-png/pin-icon-png-9.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    cursor: grab;
`;

const MapMarker = ({ text, onClick }) => (
    <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" width="3em" height="2.5em" onClick={onClick}/>
    <p className="pin-text">{text}</p>
  </div>
);

MapMarker.defaultProps = {
    onClick: null,
};

MapMarker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

export default MapMarker;