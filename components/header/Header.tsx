import React, { Fragment } from 'react';
import { Avatar, Col, Dropdown, Menu, Row } from 'antd';
import { Logo } from '../../assets/icons/Logo';
import InputUI from '../../components/ui/form/inputUI';

import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import FormUI from '../ui/form/formUI';
import { useStudent } from '../../context/StudentContext';
import { useAuth } from '../../context/AuthContext';
import { User } from '../../common/models/User/LoginUser';
import PrivateComponent from '../private-component/PrivateComponent';

const shortName = (user: User) => {
  const firstNameLetter = user.firstName.charAt(0).toUpperCase();
  const lastNameLetter = user.lastName.charAt(0).toUpperCase();

  return firstNameLetter + lastNameLetter;
};

const menu = (user: User) => (
  <Menu style={{ minWidth: '280px', padding: 16 }}>
    <div style={{ marginBottom: 15 }}>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col xs={4}>
          <Avatar style={{ background: '#522725' }}>{shortName(user)}</Avatar>
        </Col>
        <Col xs={17}>
          {user.firstName} {user.lastName}
          <br /> <span style={{ color: 'gray' }}>{user.email}</span>
        </Col>
      </Row>
    </div>

    <Menu.Item>Profil</Menu.Item>
    <Menu.Item>Ayarlar</Menu.Item>
    <Menu.Item>Çıkış</Menu.Item>
  </Menu>
);

// const useClickOutside = (ref: any, callback: any) => {
//   const handleClick = (e: any) => {
//     if (ref.current && !ref.current.contains(e.target)) {
//       callback();
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener('click', handleClick);

//     return () => {
//       document.removeEventListener('click', handleClick);
//     };
//   });
// };

// const ClickBox = ({ onClickOutside, children }: any) => {
//   const clickRef = React.useRef(null);

//   useClickOutside(clickRef, onClickOutside);

//   return <div ref={clickRef}>{children}</div>;
// };

function HeaderUI() {
  const { user } = useAuth();

  const { setFilterText, setActiveFilter, activeFilter } = useStudent();
  const onValuesChange = (changedValues: { searchStudent: string }) => {
    setFilterText(changedValues.searchStudent);
  };

  return (
    <div style={{ borderBottom: '1px solid #d5d5d57d' }}>
      <div style={{ borderBottom: 'none', display: 'flex', alignItems: 'center', background: 'white', padding: 10 }}>
        <div style={{ marginRight: 60, marginTop: -10 }}>{Logo()}</div>
        <Fragment>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <PrivateComponent userRole={'ADMIN'}>
              <FormUI isNotBlank onValuesChange={onValuesChange}>
                <InputUI
                  style={activeFilter ? { width: '1100px' } : { width: '240px' }}
                  prefix={<SearchOutlined />}
                  onFocus={() => {
                    setActiveFilter(true);
                  }}
                  suffix={
                    <CloseOutlined
                      style={!activeFilter ? { display: 'none' } : {}}
                      onClick={() => {
                        setActiveFilter(false);
                      }}
                    />
                  }
                  placeholder="Öğrencilerde Eşzamanlı Ara"
                  name={'searchStudent'}
                />
              </FormUI>
            </PrivateComponent>

            <Dropdown overlay={menu(user)} placement="bottomLeft" arrow>
              <Avatar size="small" style={{ background: 'rgb(29,25,25)', position: 'absolute', right: 20 }}>
                {shortName(user)}
              </Avatar>
            </Dropdown>
          </div>
        </Fragment>
      </div>
    </div>
  );
}

export default HeaderUI;
