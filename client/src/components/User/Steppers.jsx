
import React, { useState, useEffect } from 'react';
import { Button, message, Steps, theme, Radio, Input, Select, } from 'antd';
import '../cardeffect.css'
import generateYears from '../../data/caryear.js'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';

const steps = [
  {
    title: 'Your car',
    content: 'hi',
  },
  {
    title: 'Car availibility',
    content: 'Last-content',
  },
  {
    title: 'Car details',
    content: 'Last-content',
  },
  {
    title: 'Car photos',
    content: 'Last-content',
  },
  {
    title: 'Submit your listing',
    content: 'Last-content',
  },
];
const Steppers = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    form.validateFields().then(() => {
      setCurrent(current + 1);
    }).catch((errorInfo) => {
      console.log('Validation failed:', errorInfo);
    });
  };
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    height: '50vh',
    color: token.colorTextTertiary,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 20,
  };
  const caryear = generateYears()
  return (
    <>
      <Steps current={current} items={items} />
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} className='mb-16'>
        {(current === 0 &&
          <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
            <div className='content-your-car '>
              <div className='flex flex-col gap-3' >
                <div>
                  <label htmlFor=""> location</label>
                  <Form.Item
                    className='w-[400px]'
                    name="location"
                    rules={[
                      {
                        required: true,
                        message: 'your car location!',
                      },
                    ]}
                  >
                    <Input placeholder="Your car location" className='rounded-[0px] ' />
                  </Form.Item>
                </div>
                <div className='year-model-make grid grid-cols-3'>
                  <div>
                    <label htmlFor="caryear">Year</label>
                    <Form.Item
                      name="caryear"
                      rules={[
                        {
                          required: true,
                          message: 'Year!',
                        },
                      ]}
                    >
                      <Select placeholder="select year">
                        {caryear.map((year, index) => (
                          <Option key={index} required>{year}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor="carmake"> Make</label>
                    <Form.Item
                      name="carmake"
                      rules={[
                        {
                          required: true,
                          message: 'car make!',
                        },
                      ]}
                    >
                      <Select placeholder="Make">
                        {caryear.map((year, index) => (
                          <Option key={index} required>{year}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor="carmodel">Model</label>
                    <Form.Item
                      name="carmodel"
                      rules={[
                        {
                          required: true,
                          message: 'car model!',
                        },
                      ]}
                    >
                      <Select placeholder="Model">
                        {caryear.map((year, index) => (
                          <Option key={index} required>{year}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                </div>
                <div className='w-[260px]'>
                  <div>
                    <label htmlFor="distance">Distance</label>
                    <Form.Item
                      name="distance"
                      rules={[
                        {
                          required: true,
                          message: 'car distance!',
                        },
                      ]}
                    >
                      <Select placeholder="Model" className='mb-4'>
                        {caryear.map((year, index) => (
                          <Option key={index} required>{year}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor="Transition">Transition</label>
                    <Form.Item
                      name="Transition"
                      rules={[
                        {
                          required: true,
                          message: 'Transition!',
                        },
                      ]}
                    >
                      <Radio.Group >
                        <Radio value={1} >Manual</Radio>
                        <Radio value={2} >Automatic</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          ||
          (current === 1 &&
            <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
              <div className='content-your-car '>
                <div className='flex flex-col gap-3' >
                  <p>What’s the shortest and longest possible trip you’ll accept?</p>
                  <div>
                    <label htmlFor=""> Minimum trip duration</label>
                    <Form.Item
                      className='w-[400px]'
                      name="min"
                      rules={[
                        {
                          required: true,
                          message: 'Minimum trip duration!',
                        },
                      ]}
                    >
                      <Select placeholder="select number of days">
                        <Option value={1} key={1} >1</Option>
                        <Option value={2} key={2} >2</Option>
                        <Option value={3} key={3} >3</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <label htmlFor=""> Maximum trip duration</label>
                    <Form.Item
                      className='w-[400px]'
                      name="max"
                      rules={[
                        {
                          required: true,
                          message: 'Maximum trip duration!',
                        },
                      ]}
                    >
                      <Select placeholder="select number of days">
                        <Option value={1} key={1} >1</Option>
                        <Option value={2} key={2} >2</Option>
                        <Option value={3} key={3} >3</Option>
                      </Select>                    
                      </Form.Item>
                  </div>
                </div>
              </div>
            </div>)
          ||
          (current === 2 && <div style={contentStyle}>hello 2</div>)
          ||
          (current === 3 && <div style={contentStyle}>Hello 3</div>)
          ||
          (current === 4 && <div style={contentStyle}>Hello 5</div>)}

        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button id="prevbtn"style={{ margin: '0 8px' }} onClick={prev}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button id="nextbtn" type="primary" onClick={() => next()} className='bg-black'>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" htmlType="submit" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};
export default Steppers;
