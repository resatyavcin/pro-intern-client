//Next Import
import type { NextPage } from 'next';
import AuthLayout from '../core/AuthLayout';
import { Form, Input, Button } from 'antd';
import { Card } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Home: NextPage = () => {
  const [form] = Form.useForm();

  return (
    <AuthLayout>
      <Card>
        <img
          width={74}
          height={74}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/BA%C4%B0B%C3%9C_logo.png/484px-BA%C4%B0B%C3%9C_logo.png'
          }
        />
        <Title level={2}>
          AIBU
          <Text type="warning">STAJ</Text>
        </Title>

        <Form layout={'horizontal'} form={form}>
          <Form.Item label="Email">
            <Input placeholder="email" addonAfter="@ibu.edu.tr" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button block type="primary">
              KAYDOL
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AuthLayout>
  );
};

export default Home;
