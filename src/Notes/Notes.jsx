import React from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

export default class Notes extends React.PureComponent {
  static get propTypes() {
    return {
      notes: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  render() {
    return (
      <div className="w-full md:w-1/2 p-2">
        <ContentEditable
          className="w-full h-full"
          onChange={e => this.props.onChange(e.target.value)}
          html={this.props.notes}
        />
      </div>
    );
  }
}
