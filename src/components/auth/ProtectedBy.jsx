/* @flow */
import * as React from 'react';
import { ROLES, AREAS } from '../utils/globals';

type ActionsEnum = 'view' | 'readOnly';

type ProtectedByProps = {
  roles?: Array<number>,
  areas?: Array<number>,
  action: ActionsEnum,
  children: any,
};

type ProtectedByState = {};

class ProtectedBy extends React.Component<ProtectedByProps, ProtectedByState> {
  user: { id: number, name: string, role: number, area: number } = {
    id: 1,
    name: 'dmartinez',
    role: ROLES.SPECIALIST,
    area: AREAS.LEGAL,
  };
  inRole = (role: number): boolean => {
    const { roles } = this.props;
    return (roles ? roles.indexOf(role) > -1 : false);
  }
  inArea = (area: number): boolean => {
    const { areas } = this .props;
    return (areas ? areas.indexOf(area) > -1 : false);
  }
  render() {
    const { action, children } = this.props;
    if (this.inRole(this.user.role) || this.inArea(this.user.area)) {
      // Validate if the component is readOnly or if it can be edited.
      if (action === 'view') return <div>{children}</div>;
      else return <div>{children}</div>;
    }
    return <div />;
  }
}

export default ProtectedBy;
