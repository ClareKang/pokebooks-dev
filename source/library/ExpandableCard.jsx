import React, { PropTypes, Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';

const expandableCardStyle = {
  marginBottom: 10,
};

export default class ExpandableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  render() {
    return (
      <Card
        style={expandableCardStyle}
        expanded={this.state.expanded}
        onExpandChange={this.handleToggle}
      >
        <CardHeader
          title={this.props.title}
          actAsExpander
          showExpandableButton
        />
        {this.props.children}
      </Card>
    );
  }
}

ExpandableCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
