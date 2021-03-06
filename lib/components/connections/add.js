import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Form, Input, Select, Button, TextArea, Message } from '@recipher/form';
import { Search, Spinner } from '@recipher/icons';

export class Add extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { search, fields: { q }} = this.props;

    if (e.keyCode === 13) search({ q: q.value });
  }

  render() {
    const { fields, results: { fetching } } = this.props;

    const colour = fields.q.active ? '#999' : '#ccc';

    const icon = fetching 
                 ? <Spinner rotate={true} colour={colour} /> 
                 : <Search colour={colour} />;
    
    return (
      <Input label='Search Members' field={fields.q} focus={true} icon={icon} onKeyDown={this.handleSubmit} />
    );
  }
};

export default reduxForm({ form: 'users', fields: [ 'q' ] })(Add);
